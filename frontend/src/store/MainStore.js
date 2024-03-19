import { defineStore } from "pinia";

export const MainStore = defineStore("main", {
    state: () => ({
        MenuShow: true,
        Size: {
            w: 1024,
            h: 768,
            fontSize: 18
        },
        Side: {
            minWidth: 50,
            maxWidth: 150
        }
    })
})