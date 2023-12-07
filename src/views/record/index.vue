<template>
  <a-button type="primary" @click="handleStartRecord">开始录制</a-button>
  <a-button type="primary" @click="handleStart">开始请求</a-button>
  <a-button type="primary" @click="handleStartPlay">开始播放</a-button>
  <div id="replay" ref="videoRef" />
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import rrwebPlayer from 'rrweb-player'
  import { record } from 'rrweb'
  import 'rrweb-player/dist/style.css'

  const videoRef = ref(null)
  const handleStart = () => {
    axios.get('http://localhost:3000/record').then((res) => {
      console.log(res)
      new rrwebPlayer({
        target: videoRef.value, // 可以自定义 DOM 元素
        // 配置项
        props: {
          events: res.data.file.data,
        },
      })
    })
  }
  const recordList = ref([])
  const handleStartRecord = () => {
    record({
      emit(event) {
        recordList.value.push(event)
        console.log(event)
      },
    })
  }

  const handleStartPlay = () => {
    new rrwebPlayer({
      target: videoRef.value, // 可以自定义 DOM 元素
      // 配置项
      props: {
        events: recordList.value,
      },
    })
  }
</script>
