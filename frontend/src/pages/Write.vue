<template>
    <div>
        <div class="page"
            :style="{ width: `${store.Size.w * 0.7}px`, height: `${store.Size.h * 0.85}px`, fontSize: `${store.Size.fontSize}px` }"
            v-if="store.MenuShow">
            <div class="chapter_title">
                <input type="text" placeholder="请输入章节名" :style="{ fontSize: `${store.Size.fontSize}px` }">
            </div>
            <hr>
            <div class="content-box">
                <div class="content" contenteditable="true" @keyup="initContent" ref="insertText" spellcheck="false"
                    @paste="getPasteContent" :style="{ height: `calc(${store.Size.h * 0.85}px - 60px)` }">
                    <p><br></p>
                </div>
            </div>
        </div>
        <div>{{ countWord }}</div>
    </div>
</template>
<script setup lang="ts">
import { Size } from "../../wailsjs/runtime/runtime";
import { StyleCss } from "../types/wirte";
import { reactive, defineProps, ref, onMounted } from "vue";
import { MainStore } from "../store/MainStore";
const store = MainStore();
const paragraphList = ref<string[]>([]);
const sel = document.getSelection();
const insertText = ref<HTMLElement>();
const countWord = ref(0);
let isComposing = false;
onMounted(() => {
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState == "visible") {
            console.log("进入页面");
        } else {
            console.log("离开页面");
        }
    });
    document.addEventListener('compositionstart', () => {
        isComposing = true;
    });

    document.addEventListener('compositionend', () => {
        isComposing = false;
    });

})

const waitAnime = () => {
    animend.value = true
}

const getPasteContent = (e: ClipboardEvent) => {
    const data = e.clipboardData;
    if (data == null) return;
}

const initContent = (e: KeyboardEvent) => {
    if (insertText.value == undefined) return;
    if (insertText.value.childNodes.length - 1 < 0) {
        insertText.value.innerHTML = "<p style='margin:0 0 10px;'><br></p>"
    }
    if (!isComposing) {
        if (insertText.value.textContent == null) return;
        const str = insertText.value.textContent;
        let zh_words = 0;
        let en_words = 0;
        const zh = str.match(/[\u4E00-\u9FFF]+/g);
        const en = str.match(/[a-zA-Z]+/g);

        if (zh !== null) {
            zh.forEach((item) => {
                zh_words += item.length
            })
        }
        if (en !== null) {
            en_words = en.length;
        }
        countWord.value = en_words + zh_words;
    }
}

const addNote = (e: MouseEvent) => {
    if (sel == null) return;
    if (sel.toString().length > 0) {
        const range = sel.getRangeAt(0);
        const span = document.createElement("span");
        span.style.backgroundColor = "rgb(102, 255, 0)";
        span.appendChild(range.extractContents());
        range.insertNode(span);
        sel.removeAllRanges();
    }
}
</script>
<style scoped>
p {
    margin: 0 0 10px;
}

.page {
    margin: auto;
    background: #fff;
    transform-origin: top;
    padding: 0 2em;
}

hr {
    margin: 0 auto 10px;
}

.chapter_title {
    width: 100%;

    input {
        margin: 8px 0;
        outline: none;
        padding: 0;
        border: 0;
        width: inherit;
        font-weight: bold;
    }
}

.content {
    color: #000;
    border: none;
    outline: none;
    text-indent: 2em;
    text-align: left;
    overflow-y: scroll;
}
</style>