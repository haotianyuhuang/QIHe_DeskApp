<template>
	<div class="menu">
		<router-link v-for="(item, index) in menuList" :to="item.path" class="menuIndex"
			:style="{ fontSize: `${MainStore().Size.fontSize}px`, width: (MainStore().Size.w > 1024 ? `${MainStore().Side.maxWidth}px` : `${MainStore().Side.minWidth}px`) }">
			<i>图标</i>
			<i v-if="MainStore().Size.w > 1024">{{ item.title }}</i>
		</router-link>
	</div>
</template>
<script setup lang="ts">
import { MainStore } from "../store/MainStore";
const menuList = [{ title: "首页", path: "/", fonticon: "" }, { title: "写作", path: "/write", fonticon: "" }]
</script>
<style scoped>
.menu {
	height: 100vh;
	background: #ee6363;
	display: flex;
	flex-direction: column;

	.menuIndex {
		text-decoration: none;
		color: #111111;
	}
}
</style>
