<script setup>
import { RouterLink, RouterView, useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
