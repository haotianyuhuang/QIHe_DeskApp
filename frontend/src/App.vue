<script setup>
import { WindowGetSize } from "../wailsjs/runtime/runtime";
import TitleMenu from "./components/TitleMenu.vue";
import { MainStore } from "./store/MainStore";
window.addEventListener("resize", () => {
  WindowGetSize().then(res => {
    res.w > 1024 ? Object.assign(res, { fontSize: 28 }) : Object.assign(res, { fontSize: 18 })
    MainStore().Size = res
  })
})
</script>

<template>
  <div>
    <TitleMenu></TitleMenu>
    <router-view></router-view>
  </div>
</template>

<style></style>
