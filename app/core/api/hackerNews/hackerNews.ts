import type { APIStory, APIUser } from "./models/models";
import { fetch } from 'ofetch';

export interface ApiHackerNews {
  getTopStories: () => Promise<number[]>,
  getStory: (id: number) => Promise<APIStory>,
  getUser: (id: string) => Promise<APIUser>,
}

const hackerNewsBaseUrl = 'https://hacker-news.firebaseio.com/v0';

const getTopStories = async (): Promise<number[]> => {
  const response = await fetch(`${hackerNewsBaseUrl}/topstories.json`);
  const data = await response.json();
  return data;
};

const getStory = async (id: number): Promise<APIStory> => {
  const response = await fetch(`${hackerNewsBaseUrl}/item/${id}.json`);
  const data = await response.json();
  return data;
}

const getUser = async (id: string): Promise<APIUser> => {
  const response = await fetch(`${hackerNewsBaseUrl}/user/${id}.json`);
  const data = await response.json();
  return data;
};

export const hackerNews: ApiHackerNews = {
  getTopStories,
  getStory,
  getUser,
}