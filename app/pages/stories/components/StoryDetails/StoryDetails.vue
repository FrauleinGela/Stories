<script lang='ts' setup>
import { toLocalDateTime } from '~/lib/formatter';
import type { Story } from '../../../../common/models/Story';
const props = defineProps<{
  story: Story,
}>();

</script>
<template>
  <div class="card" v-if="story">
    <img 
      src="~/assets/img/pinia.png" 
      alt="Story Image" 
      style="height: 100px; width: 100%;" 
    />
    <div class="card card-details">
      <h2 class="">
        <a :href="story.url" target="_blank" rel="noopener">
          {{ story.title }}
        </a>
      </h2>
      <p>Score: {{ story.score }}</p>
      <p>Date created: {{ toLocalDateTime(story.createdAt) }}</p> 
      <p>Author ID: {{ story.author.id }}</p>
      <p>Author Karma score: {{ story.author.karma }}</p>
    </div>
  </div>
</template>
<style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    .card-details {
      padding: 2px 16px;
    }

    .card-details p {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
</style>