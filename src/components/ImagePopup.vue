<template>
    <div v-if="isShow" class="popup-layout">
        <div class="header">
            <button class="close-btn" @click="close"/>
        </div>
        <div class="body">
            <Carousel :items-to-show="1" v-model="_modelValue">
                <Slide v-for="(item, idx) in src" :key="idx">
                    <img :src="item" style="width:80%;">
                </Slide>
                <template #addons>
                    <navigation />
                </template>
            </Carousel>
            <div class="slider">
                <div class="slider-item" v-for="(item, idx) in src" :key="idx" @click="moveSlide(idx)" :ref="el=> slideRef[idx] = el">
                    <img :class="activeClass(idx)" :src="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, nextTick} from "vue"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

const _modelValue = computed({
    get: () => props.modelValue,
    set: value => {
        emit("update:modelValue",value)
        slideRef.value[value].scrollIntoView({inline:"start",behavior:"smooth"})
    }
})

const isShow = ref(false)
const open = () => {
    isShow.value = true
    document.body.style.overflow = "hidden"
    nextTick(()=> {
        document.querySelector(".slider").scrollTo({left: slideRef.value[_modelValue.value].getBoundingClientRect().left,behavior:"smooth"})
    })
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

// 현재 인덱스인 경우 acitve
const activeClass = computed(()=> index => index === _modelValue.value?"active":"")

// 사진 클릭
const moveSlide = value => _modelValue.value = value

const slideRef = ref([])
</script>

<style>
@import '/src/assets/css/ImagePopup.css';
</style>