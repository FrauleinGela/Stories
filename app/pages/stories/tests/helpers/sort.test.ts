import { describe, it, expect } from "vitest";
import { type Story } from "../../../../common/models/Story";
import { sort } from "../../helpers/sort";

const stories: Story[] = [
  {
    id: 1,
    title: "Story A",
    url: "http://example.com/a",
    createdAt: new Date('2024-11-24T00:00:00Z'),
    score: 2,
    author: { id: 'alice', karma: 100 },
  },
  {
    id: 2,
    title: "Story A",
    url: "http://example.com/a",
    createdAt: new Date('2024-11-24T00:00:00Z'),
    score: 6,
    author: { id: 'angela', karma: 10 },
  },
  {
    id: 3,
    title: "Story A",
    url: "http://example.com/a",
    createdAt: new Date('2024-11-24T00:00:00Z'),
    score: 1,
    author: { id: 'martin', karma: 200 },
  },
];

describe("sort", () => {
  it("sorts stories by score ascending", () => {
    const sorted = sort(stories, "score");
    expect(sorted.map((s: Story) => s.id)).toEqual([3, 1, 2]);
  });

  it("sorts stories by userKarma ascending", () => {
    const sorted = sort(stories, "authorKarma");
    expect(sorted.map((s: Story) => s.id)).toEqual([2, 1, 3]);
  });
});