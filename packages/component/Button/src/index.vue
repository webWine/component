<template>
    <button @click="change($event)">{{ text }}</button>
</template>
<script setup lang="ts">
import { buttonEmits,buttonProps } from './index';
defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const change = (e:Event)=>{
    emit['change']
}
</script>