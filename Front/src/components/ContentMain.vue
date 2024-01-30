<script setup>
  import {
    ArrowLeftIcon
  } from '@heroicons/vue/24/outline';
  import Spinner from '/@components/spinner/Spinner.vue'
</script>

<template>
  <div class="flex h-full flex-col">
    <header class="sticky top-0 z-20 flex h-12 items-center justify-between border-b bg-white px-5 dark:border-neutral-700 dark:bg-neutral-800 ">
      <!-- back button -->
      <button class="sm:hidden">
        <ArrowLeftIcon className="h-5 w-5 text-neutral-800" />
      </button>
      <span class="font-semibold">{{ this.name }}</span>
      <li class="flex items-center justify-between rounded-lg p-1 text-left hover:bg-neutral-100 dark:hover:bg-neutral-900">
        <span class="text-slate-600 dark:text-slate-400">검색</span>
        <div class="flex gap-1">
        <!-- livery add -->
<!--          <ShortKey />
          <kbd>K</kbd>-->
        </div>
      </li>
    </header>

    <main class="flex-1 py-3 min-w-[800px]">
      <div ref="morefetchRef" />
      <div v-if="isLoading" class="mb-4 flex items-center justify-center">
        <Spinner class="h-8 w-8 stroke-neutral-200 dark:stroke-neutral-400" />
      </div>
      <div class="flex h-full items-center justify-center text-xs text-neutral-400">
        내용이 없읍니다.... :)
      </div>
      <div>
      </div>
      <div ref="backBottomRef" />
    </main>

    <!-- Footer -->
    <footer class="sticky bottom-16 z-20 min-h-[59px] w-full border-t bg-white py-3 px-5 dark:border-neutral-700 dark:bg-neutral-800 sm:bottom-0">
      <div class="flex items-center gap-3">
        <div class="max-w-[682px] flex-1">
<!--          <Textarea :value="content" @input="updateContent" :readonly="isSubmitting" @enter="onEnter" @keydown="onKeyDown" :id="id" />-->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'ContentMain',
    data() {
      return {
        name: 'Test',
        isLoading: true,
      }
    }
  };

</script>

<style scoped>

</style>
