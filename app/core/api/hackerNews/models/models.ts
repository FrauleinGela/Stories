export interface APIStory {
  title: string;
  type: string;
  url: string;
  by: string;
  time: number;
  score: number;
  id: number;
}

export interface APIUser {
  id: string;
  karma: number;
}