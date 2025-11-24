import type { Story } from "../../../common/models/Story";
import { api } from "~/core/api/api";
import type { APIStory, APIUser } from "~/core/api/hackerNews/models/models";

const useFetchStoriesIds = () => {
  return useQuery<number[], Error>({
    key: ['top-stories-ids'],
    query: () => api.hackerNews.getTopStories(),
  });
}

export const useFetchAlllStories = (topStories: number) => {
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
  
  const { data: storiesIds } = useFetchStoriesIds();
   return useQuery<Story[], Error, Story[]>({
    key: ['all-stories-with-users', storiesIds.value ?? []],
    query: async () => {
      const ids = storiesIds.value ?? [];
      if (!ids?.length) {
        return [];
      }

      const topStoryIds = ids.slice(0, topStories);
      const stories = await Promise.all(topStoryIds.map(async (storyId) => api.hackerNews.getStory(storyId)));

      const userIds = Array.from(new Set(stories.map(story => story?.by).filter(Boolean)));
      const users = await Promise.all(
        userIds.map(userId => api.hackerNews.getUser(userId))
      );

      const usersMap = Object.fromEntries(users.map(user => [user.id, user]));
      
      return stories.map(story => {
        const userDetail = usersMap[story.by];
        return mapStory(story, userDetail);
      });
    }
  });
}
