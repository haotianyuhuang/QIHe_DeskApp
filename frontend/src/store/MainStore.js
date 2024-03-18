import { defineStore } from "pinia";

export const MainStore = defineStore("main", {
    state: () => ({
        MenuShow: true
    })
})