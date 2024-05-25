<template>
  <div class="w-screen h-screen">
    <iframe src="https://qwerty.kaiyi.cool/" frameborder="0" class="w-full h-full"></iframe>
  </div>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'

async function getMessage() {
  const res = await invoke('greet', {
    name: '这是我随便添加的'
  })
  console.log(res)
}

getMessage()
</script>

<style scoped></style>
