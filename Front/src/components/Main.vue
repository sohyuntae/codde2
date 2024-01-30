<script setup>

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
                  <button>
  <!--                    <img src="" alt="" class="h-8 w-8 rounded-full" />-->
                  </button>
              </header>
              <!-- Menu -->
              <menu role="menu" class="flex-1 overflow-auto">
                  <ul>
                      <!-- Room List Items -->
  <!--                    {roomList.map((item, key) => (
                          <li key="{item.id}">
                              <a href={`/room/${item.id}`} class="flex h-16 items-center justify-between gap-4 px-5">
                                  <img src="{item.logo_url}" alt="" class="h-8 w-8" />
                                  &lt;!&ndash; Room Details &ndash;&gt;
                                  <div class="flex-1 space-y-1">
                                      <div class="flex items-center justify-between">
                                          <div class="{classnames({ 'font-semibold': query.id === item.id })}">
                                              {item.name}
                                          </div>
                                          <div class="text-xs text-neutral-500 dark:text-neutral-400">
                                              {!!item.newDate && dayjs(item.newDate).locale('ko').fromNow()}
                                          </div>
                                      </div>
                                      <div class="flex items-center justify-between">
                                          <div class="w-56 truncate text-xs text-neutral-500 dark:text-neutral-400 sm:w-40">
                                              {item.newChat}
                                          </div>
                                          <div class="flex h-4 justify-end">
                                              {item.newCount > 0 && (
                                                  <div class="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-2xs text-white">
                                                      {item.newCount}
                                                  </div>
                                              )}
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </li>
                      ))}-->
                  </ul>
              </menu>
              <!-- Footer -->
              <footer class="sticky bottom-0 flex h-[59px]">
                  <ul class="flex w-full">
                      <!-- Mention -->
                      <li class="flex-1">
                          <a href="/mentions" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                              <!-- Mention Icon and Label -->
                          </a>
                      </li>
                      <!-- Threads -->
                      <li class="flex-1">
                          <a href="/threads" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                              <!-- Threads Icon and Label -->
                          </a>
                      </li>
                      <!-- Saves -->
                      <li class="flex-1">
                          <a href="/saves" class="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-400">
                              <!-- Saves Icon and Label -->
                          </a>
                      </li>
                  </ul>
              </footer>
          </div>

          <!-- Main Content Area -->
          <div class="flex flex-1 flex-col border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 sm:block sm:border-x">
              <!-- Children (Main Content) -->

              <!-- Bottom Navigation (for mobile) -->
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

<style scoped>

</style>
