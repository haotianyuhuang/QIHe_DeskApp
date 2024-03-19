<template>
	<div class="menu">
		<router-link to="/">首页</router-link>
		<router-link to="/write">写作</router-link>
	</div>
</template>
<script setup>
import { MainStore } from "../store/MainStore";
const store = MainStore()
</script>
<style scoped>
.menu {
	height: 30px;
	background: #e93030;
}

@keyframes toTop {
	0% {
		transform: translateY(-30px) rotateY(45deg);
		opacity: 0;
	}

	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>
