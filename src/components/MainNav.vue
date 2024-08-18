<script setup>
import { useRouter, useRoute } from "../router";

const router = useRouter();
const route = useRoute();
</script>
<template>
  <nav>
    <ul class="flex items-center gap-2 bg-gray-200 dark:bg-gray-900">
      <li
        :class="{
          'bg-blue-500 text-white': route.path === '/',
        }"
      >
        <a
          class="block p-3 cursor-pointer"
          @click.prevent="router.push('/')"
          to="/"
          >Home</a
        >
      </li>
      <li
        :class="{
          'bg-blue-500 text-white': route.path === '/about',
        }"
      >
        <a
          class="block p-3 cursor-pointer"
          @click.prevent="router.push('/about')"
          to="/about"
          >About</a
        >
      </li>
      <li
        :class="{
          'bg-blue-500 text-white': route.path === '/blog',
        }"
      >
        <a
          class="block p-3 cursor-pointer"
          @click.prevent="router.push('/blog')"
          to="/about"
          >Blog</a
        >
      </li>
    </ul>
  </nav>
</template>
