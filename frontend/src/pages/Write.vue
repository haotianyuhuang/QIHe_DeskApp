<template>
    <div>
        <div class="page">
            <div class="content-box">
                <div class="content" contenteditable="true" @keyup="initContent" @mouseup="addNote" ref="insertText"
                    spellcheck="false" @paste="getPasteContent">
                    <p><br></p>
                </div>
            </div>
        </div>
        <div>{{ countWord }}</div>
    </div>
</template>
<script setup lang="ts">
import { StyleCss } from "../types/wirte";
import { reactive, defineProps, ref, onMounted } from "vue";
document.title = "写作";
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
        console.log(isComposing);

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

.note {
    background: rgb(102, 255, 0);
}

.page {
    width: 800px;
    height: 600px;
    margin: auto;
    background: #fff;
}

.content-box {
    width: inherit;
    height: inherit;
    padding: 18px;
}

.content {
    height: 100%;
    color: #000;
    border: none;
    outline: none;
    font-size: 18px;
    text-indent: 2em;
    text-align: left;
    overflow-y: scroll;
}
</style>