<template>
    <div v-if="isShow" class="popup-layout">
        <div class="header">
            <h1>갤러리</h1>
            <button class="close-btn" @click="close"/>
        </div>
        <hr />
        <div class="body">
            <v-carousel hide-delimiters v-model="_modelValue">
                <v-carousel-item :src="item" v-for="(item,idx) in src" :key="idx" />
            </v-carousel>
        </div>
    </div>
</template>

<script setup>
import {ref, computed} from "vue"

const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

const _modelValue = computed({
    get: ()=>props.modelValue,
    set: value => emit("update:modelValue",value)
})

const isShow = ref(false)
const open = () => {
    isShow.value = true
    document.body.style.overflow = "hidden"
}
const close = () => {
    isShow.value = false
    document.body.style.overflow = "auto"
}

defineExpose({open,close})

const src = ref(["https://cdn.jsdelivr.net/gh/pijoh3/invite-image/1.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/2.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/4.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/5.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/17.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/12.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/3.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/7.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/8.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/9.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/10.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/13.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/14.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/15.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/16.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/11.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/6.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/18.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/20.jpg",
    "https://cdn.jsdelivr.net/gh/pijoh3/invite-image/21.jpg"])
</script>

<style>
@import '/src/assets/css/ImagePopup.css';
</style>