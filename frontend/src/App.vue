<script setup>
import { ref } from "vue";
import { WindowGetSize } from "../wailsjs/runtime/runtime";
import { GetPaths } from "../wailsjs/go/utils/utils";
import TitleMenu from "./components/TitleMenu.vue";
import Write from "./pages/Write.vue";
let size = ref({ w: 1024, h: 768 });
window.addEventListener("resize", () => {
  WindowGetSize().then(res => { size.value = res })
})
</script>

<template>
  <div>
    <TitleMenu></TitleMenu>
    <Write :size="size"></Write>
  </div>
</template>

<style></style>
