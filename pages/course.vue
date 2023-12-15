<template>
  <div class="prose mb-12">
    <h1>
      <span class="font-medium"
        >Course: <span class="font-bold">Mastering Nuxt</span></span
      >
    </h1>
  </div>

  <div class="flex flex-row justify-center flex-grow w-full">
    <div
      class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[35ch] flex-1">
      <h3>Chapters</h3>
      <div
        v-for="chapter in chapters"
        class="space-y-1 flex flex-col mb-4"
        :key="chapter.slug">
        <h4>{{ chapter.title }}</h4>
        <NuxtLink
          v-for="(lesson, index) in chapter.lessons"
          :key="lesson.slug"
          class="flex space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
          :to="lesson.path"
          :class="{
            'text-blue-500': lesson.path === $route.fullPath,
            'text-gray-600': lesson.path !== $route.fullPath,
          }"
          ><span class="text-gray-500">{{ index + 1 }}.</span>
          <span>{{ lesson.title }}</span></NuxtLink
        >
      </div>
    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch] max-w-none flex-1">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>
            oh no something broke!
            <code>{{ error }}</code>
          </p>

          <button
            class="hover:cursor-pointer bg-gray-500 text-white font-bold py-1 px-3 rounded"
            @click="resetError(error)">
            Reset
          </button>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();

const resetError = async (error) => {
  await navigateTo(
    "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
  );
  error.value = null;
};
</script>

<!-- <style scoped>
.router-link-active {
  @apply text-blue-500;
}
</style> -->
