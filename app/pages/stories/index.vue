<script lang='ts' setup>
import StoryDetails from './components/StoryDetails/StoryDetails.vue';
import { useFetchAlllStories } from './composables/useFetchAllStories';

const top10Stories = 10;
const { error, isLoading, allStories, fetch } = useFetchAlllStories(top10Stories);

fetch();
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
      <div class="grid" role="list">
        <template v-for="story in allStories" :key="story.id">
          <article class="col-sm col-md col-lg">
            <StoryDetails :story/>
          </article>
        </template>
      </div>
    </template>
  </section>
</template>
