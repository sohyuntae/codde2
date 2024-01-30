<script setup>
  import Logo from './logo/Logo.vue';
  import {
    AtSymbolIcon,
    BookmarkIcon,
    ChatBubbleBottomCenterTextIcon,
  } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="mx-auto max-w-6xl">
      <div class="flex gap-5">
          <!-- Left Sidebar -->
          <div class="sticky top-0 hidden h-screen w-full flex-col divide-y border-x border-neutral-200 bg-white dark:divide-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 sm:flex sm:w-80">
              <!-- Header -->
              <header class="flex h-12 items-center justify-between px-5">
                  <a href="/">
                      <Logo />
                  </a>
                  <!-- User Section -->
                  <button class="text-sm">
                    로그인
  <!--                    <img src="" alt="" class="h-8 w-8 rounded-full" />-->
                  </button>
              </header>
              <!-- Menu -->
              <menu role="menu" class="flex-1 overflow-auto">
                <ul>
                  <li v-for="(item, key) in roomList" :key="item.id">
                    <router-link
                      :to="`/room/${item.id}`"
                      :class="[
                        'flex h-16 items-center justify-between gap-4 px-5',
                        { 'bg-blue-100 dark:bg-neutral-700': query.id === item.id },
                        { 'hover:bg-blue-50 dark:hover:bg-neutral-700': query.id !== item.id },
                        { 'pointer-events-none': query.id === item.id }
                      ]"
                      @click="handleItemClick(item, key)"
                    >
                      <img :src="item.logo_url" alt="" class="h-8 w-8" />
                      <div class="flex-1 space-y-1">
                        <div class="flex items-center justify-between">
                          <div :class="{ 'font-semibold': query.id === item.id }">{{ item.name }}</div>
                          <div class="text-xs text-neutral-500 dark:text-neutral-400">
<!--                            {{ item.newDate && dayjs(item.newDate).locale('ko').fromNow() }}-->
                          </div>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="w-56 truncate text-xs text-neutral-500 dark:text-neutral-400 sm:w-40">
                            {{ item.newChat }}
                          </div>
                          <div class="flex h-4 justify-end">
                            <div v-if="item.newCount > 0" class="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-2xs text-white">
                              {{ item.newCount }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </menu>
              <!-- Footer -->
              <footer class="sticky bottom-0 flex h-[59px]">
                  <ul class="flex w-full">
                      <!-- Mention -->
                      <li class="flex-1">
                          <a href="/mentions" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                            <div>
                              <div class="flex justify-center">
                                <AtSymbolIcon class="h-5 w-5" />
                              </div>
                            </div>
                            <div class="relative text-xs">
                              <span class="font-bold">
                                멘션
                              </span>
                              <div v-if="false">
                                <span class="absolute right-0 top-0 -mr-2 -mt-1 flex h-2 w-2">
                                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/75"></span>
                                  <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                </span>
                              </div>
                            </div>

                          </a>
                      </li>
                      <!-- Threads -->
                      <li class="flex-1">
                          <a href="/threads" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                            <div>
                              <div class="flex justify-center">
                                <ChatBubbleBottomCenterTextIcon class="h-5 w-5" />
                              </div>
                            </div>
                            <div class="relative text-xs">
                              <span class="font-bold">
                                스레드
                              </span>
                              <div v-if="false">
                                <span class="absolute right-0 top-0 -mr-2 -mt-1 flex h-2 w-2">
                                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/75"></span>
                                  <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                                </span>
                              </div>
                            </div>
                          </a>
                      </li>
                      <!-- Saves -->
                      <li class="flex-1">
                          <a href="/saves" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                            <div>
                              <div class="flex justify-center">
                                <BookmarkIcon class="h-5 w-5" />
                              </div>
                            </div>
                            <div class="relative text-xs">
                              <span class="font-bold">
                                저장
                              </span>
                            </div>
                          </a>
                      </li>
                  </ul>
              </footer>
          </div>
          <!-- Main Content Area -->
          <div class="flex flex-1 flex-col border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 sm:block sm:border-x">
              <!-- router main -->
            <router-view></router-view>
              <nav class="sticky bottom-0 z-10 flex h-[65px] border-t bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 sm:hidden">
                  <!-- Home Button -->
                  <button>
  <!--                <button onclick="navigateTo('/')">-->
                      <!-- Home Icon and Label -->
                  </button>
                  <!-- List Button -->
                  <button>
  <!--                <button onclick="openList()">-->
                      <!-- List Icon and Label -->
                  </button>
                  <!-- User Info Button -->
                  <button>
  <!--                <button onclick="toggleUserInfo()">-->
                      <!-- User Info Icon and Label -->
                  </button>
              </nav>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    props: {
      roomList: Array, // Make sure to pass the roomList array as a prop
      query: Object,   // Make sure to pass the query object as a prop
      setState: Function, // Make sure to pass the setState function as a prop
    },
    data() {
      return {
        roomList: [
          {id: 1, name: 'Go', logo_url: '../icon/go.svg', newDate: null, newChat: '채팅 없음', newCount: 2},
          {id: 2, name: 'TypeScript', logo_url: '../icon/ts.svg', newDate: null, newChat: '타입 스크립트 왜씀?', newCount: 0},
          {id: 3, name: 'Vue', logo_url: '../icon/vue.svg', newDate: null, newChat: '리액트 보다 좋음', newCount: 3},
          {id: 4, name: 'C++', logo_url: '../icon/c++.svg', newDate: null, newChat: 'C+_+', newCount: 0},
          {id: 5, name: 'Java', logo_url: '../icon/java.svg', newDate: null, newChat: '자바 최강', newCount: 99},
          {id: 6, name: 'Ruby', logo_url: '../icon/ruby.svg', newDate: null, newChat: 'Ruby가 뭐임?', newCount: 0}
        ],
        query: {},
        // query: {
        //   id: 4, name: 'Java', logo_url: '/logo/icon/go.svg', newDate: null, newChat: null, newCount: 0
        // }
      }
    },
    methods: {
      handleItemClick(item) {
        this.query = item;
        if (item.newCount > 0) {
          // this.setState({
          //   roomList: [
          //     ...this.roomList.slice(0, key),
          //     { ...item, newCount: 0 },
          //     ...this.roomList.slice(key + 1)
          //   ]
          // });
        }
      },
    },
  };
</script>

<style scoped>

</style>
