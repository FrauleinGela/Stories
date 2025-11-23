export interface Story {
  id: number;
  title: string;
  url: string;
  createdAt: Date;
  score: number;
  author: {
    id: string;
    karma: number | undefined;
  }
}
