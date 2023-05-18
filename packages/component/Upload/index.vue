<template>
    <div>
        <input type="file"  @change="useUpload($event)">
    </div>
</template>
1、文件类型限制方法
2、切片方法
3、hooks实现
4、并发控制
<script setup>
import useUpload from "../../../hooks/useUpload.js"

</script>
<style scoped>
    
</style>