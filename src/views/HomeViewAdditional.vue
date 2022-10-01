




















<script setup>
import { ref } from 'vue';
import HomeView from './HomeView.vue';

const componentKey = ref(0);

const forceRerender = () => {
    componentKey.value += 1;
}

</script>

<template>
    <HomeView :key="componentKey" @reRender="forceRerender"/>
</template>
