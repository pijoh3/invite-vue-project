<template>
    <div v-if="isShow" class="modal">
        <div class="overlay" @click="close"></div>
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue"

const isShow = ref(false)
const open = () => isShow.value = true
const close = () => isShow.value = false

defineExpose({open,close})
</script>

<style>
@import '/src/assets/css/ImagePopup.css';
</style>