import type { Story } from "../models/Story";

export type StoriesSortBy = 'score' | 'authorKarma';

export const sort = (items: Story[], sortBy: StoriesSortBy): Story[] => {
  const sort = {
    score: (a: Story, b: Story) => a.score - b.score,
    authorKarma: (a: Story, b: Story) => (a.author.karma ?? 0) - (b.author.karma ?? 0),
  };

  return [...items].sort(sort[sortBy]);
};

