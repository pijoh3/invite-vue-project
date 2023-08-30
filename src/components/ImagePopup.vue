<template>
    <div v-if="isShow" class="popup-layout">
        <div class="header">
            <h1>갤러리</h1>
            <button class="close-btn" @click="close"/>
        </div>
        <hr />
        <div class="body">
            <v-carousel>
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/1.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/2.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/4.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/5.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/17.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/12.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/3.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/7.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/8.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/9.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/10.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/13.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/14.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/15.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/16.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/11.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/6.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/18.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/19.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/20.jpg" />
                <v-carousel-item src="https://cdn.jsdelivr.net/gh/pijoh3/invite-image/21.jpg" />
            </v-carousel>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"

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
</script>

<style>
@import '/src/assets/css/ImagePopup.css';
</style>