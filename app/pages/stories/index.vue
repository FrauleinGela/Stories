<script lang='ts' setup>
import StoryDetails from './components/StoryDetails/StoryDetails.vue';
import { useFetchAlllStories } from './composables/useFetchAllStories';
import { sort, type StoriesSortBy } from './helpers/sort';

const top10Stories = 10;
const { error, isLoading, allStories, fetch } = useFetchAlllStories(top10Stories);

fetch();
const sortBy = ref<StoriesSortBy>('score');
const sortedAllStories = computed(() => sort(allStories.value, sortBy.value));

</script>
<template>
  <div v-if="error">Error loading all stories: {{ error.message }}</div>
  <section>
    <h1>Top 10 Stories from Hacker News</h1>
    <template v-if="isLoading">
      <p>Loading stories...</p>
    </template>
    <template v-else-if="error">
      <p>Error loading stories: {{ error.message }}</p>
    </template>
    <template v-else>
      <div class="flex-col">
        <div class="flex justify-end filter-group">
          <label for="sort-select" class="visually-hidden">Sort stories by</label>
          <select
            id="sort-select"
            v-model="sortBy"
            aria-label="Sort stories by"
          >
            <option value="score">Score</option>
            <option value="authorKarma">Author Karma</option>
          </select>
        </div>
      </div>
      <div class="grid" role="list">
        <template v-for="story in sortedAllStories" :key="story.id">
          <article class="col-sm col-md col-lg">
            <StoryDetails :story/>
          </article>
        </template>
      </div>
    </template>
  </section>
</template>
<style scoped>
  .filter-group {
    padding-bottom: 1rem;
    padding-right: 1rem;

    label {
      margin-right: 0.5rem;
    }
  }

  
</style>
