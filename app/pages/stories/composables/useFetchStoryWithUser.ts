import { api } from "~/core/api/api";
import type { Story } from "../models/Story";
import type { APIStory, APIUser } from "~/core/api/hackerNews/models/models";

export const useFetchStoryWithUser = (storyId: Ref<number>) => {
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
  
  return useQuery<Story, Error, Story>({
    key: ['story-with-user', storyId.value],
    query: async () => {
      try {
        const story = await api.hackerNews.getStory(storyId.value);
        if (story && story.by) {
          const user = await api.hackerNews.getUser(story.by);
          return mapStory(story, user);
        }

        return mapStory(story);
      }
      catch (error) {
        console.error('Failed to fetch news with user:', error);
        throw error;
      }
    },
  });
}