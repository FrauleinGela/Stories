import { ref } from "vue";
import type { Story } from "../../../common/models/Story";
import { api } from "~/core/api/api";
import type { APIStory, APIUser } from "~/core/api/hackerNews/models/models";

const mapStory = (storyDetail: APIStory, userDetail?: APIUser): Story => {
    return {
      id: storyDetail.id,
      title: storyDetail.title,
      url: storyDetail.url,
      author: {
        id: storyDetail.by,
        karma: userDetail?.karma,
      },
      createdAt: new Date(storyDetail.time * 1000),
      score: storyDetail.score,
    };
}

export const useFetchAlllStories = (topStories: number) => {
  const isLoading = ref(false);
  const allStoriesWithUsers = ref<Story[]>([]);
  const error = ref<Error | null>(null);
  
  const fetch = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const storiesIds = await api.hackerNews.getTopStories();
      const topStoryIds = storiesIds.slice(0, topStories);
      const allStories = await Promise.all(topStoryIds.map(async (storyId) => {
        const story = await api.hackerNews.getStory(storyId);
        if (story && story.by) {
          const user = await api.hackerNews.getUser(story.by);
          return mapStory(story, user);
        }
        return mapStory(story);
      }));
  
      allStoriesWithUsers.value = allStories;
    } catch (err) {
      console.error('Failed to fetch all stories with users:', error);
      error.value = err as Error;
    } finally {
      isLoading.value = false;
    }
  };    

  return {
    fetch,
    error: readonly(error),
    isLoading: readonly(isLoading),
    allStories: allStoriesWithUsers,
  }
}
