<template>
  <div class="flex">
    <a-input v-model:value="src"></a-input>
    <a-button @click="handleSearch">查询</a-button>
  </div>
  <div style="width: 100%; height: 100%; position: relative">
    <iframe
      ref="iframeRef"
      class="iframe"
      :src="iframeSrc"
      frameborder="0"
      @load="handleIframeLoad"
    ></iframe>
    <div ref="maskRef" class="mask"></div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import heatmap from './heatmap.js'
  import axios from 'axios'
  import { log } from 'console'
  let src = ref('http://localhost:8080')
  let iframeSrc = ref('http://localhost:8080')
  const iframeRef = ref(null)
  const list = ref([])
  const _heatmap = heatmap()
  let heatmapInstance = null
  const maskRef = ref(null)
  const handleIframeLoad = () => {
    const container = maskRef.value
    heatmapInstance = _heatmap.create({
      container: container,
      radius: 50,
    })
    console.log(heatmapInstance, '-=-=')
  }
  const handleSearch = () => {
    axios.get('http://localhost:3000/point').then((res) => {
      console.log(res.data.file['ui.click'])
      const data: any[] = res.data.file['ui.click']
      data.forEach((item: any[]) => {
        // list.value.push(item.data.point)
        console.log(heatmapInstance)

        if (heatmapInstance) {
          console.log(item.data.x, item.data.y)

          heatmapInstance.addData({
            x: item.data.x,
            y: item.data.y,
            value: 10,
          })
        }
      })
    })
  }
</script>

<style>
  .iframe {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute !important;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    top: 0;
    left: 0;
  }
</style>
