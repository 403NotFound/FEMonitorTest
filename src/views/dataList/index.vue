<template>
  <a-table :columns="columns" :data-source="dataSource"></a-table>
  <a-table :columns="clickColumns" :data-source="clickDataSource"></a-table>
  <a-table :columns="pvColumns" :data-source="pvDataSource"></a-table>
  <a-table :columns="vueErrorColumns" :data-source="vueErrorDataSource"></a-table>
  <a-table :columns="resourceErrorColumns" :data-source="resourceErrorDataSource"></a-table>
  <a-table :columns="ajaxErrorColumns" :data-source="ajaxErrorDataSource"></a-table>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const columns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: '白屏时间',
      dataIndex: ['data', 'whiteScreenTime'],
      key: 'whiteScreenTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: 'TCP链接时间',
      dataIndex: ['data', 'tcpTime'],
      key: 'tcpTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: '请求时间',
      dataIndex: ['data', 'requestTime'],
      key: 'requestTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: 'DNS解析时间',
      dataIndex: ['data', 'dnsTime'],
      key: 'dnsTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: 'DOM解析时间',
      dataIndex: ['data', 'parseDOMTime'],
      key: 'parseDOMTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: '首次渲染时间',
      dataIndex: ['data', 'firstRenderTime'],
      key: 'firstRenderTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: '加载时间',
      dataIndex: ['data', 'onloadTime'],
      key: 'onloadTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
    {
      title: 'readyTime',
      dataIndex: ['data', 'readyTime'],
      key: 'readyTime',
      customRender: ({ text }) => {
        return `${text} ms`
      },
    },
  ]
  const pvColumns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
  ]
  const clickColumns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: 'Point',
      dataIndex: ['data', 'point'],
      key: 'point',
      customRender: ({ text }) => {
        return `[${text[0]}, ${text[1]}]`
      },
    },
    {
      title: 'X',
      dataIndex: ['data', 'x'],
      key: 'x',
    },
    {
      title: 'Y',
      dataIndex: ['data', 'y'],
      key: 'y',
    },
  ]
  const vueErrorColumns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: '列',
      dataIndex: ['data', 'col'],
      key: 'col',
    },
    {
      title: '行',
      dataIndex: ['data', 'line'],
      key: 'line',
    },
    {
      title: '文件',
      dataIndex: ['data', 'file'],
      key: 'file',
    },
  ]
  const resourceErrorColumns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: '资源URL',
      dataIndex: ['data', 'url'],
      key: 'url',
    },
  ]
  const ajaxErrorColumns = [
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '页面',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '记录时间',
      dataIndex: 'time',
      key: 'time',
      customRender: ({ text }) => {
        return new Date(text).toLocaleString()
      },
    },
    {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    },
    {
      title: '屏幕分辨率',
      dataIndex: 'screen',
      key: 'screen',
    },
    {
      title: '是否是移动端',
      dataIndex: 'isMobile',
      key: 'isMobile',
      customRender: ({ text }) => {
        return text ? '是' : '否'
      },
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: '请求URL',
      dataIndex: ['data', 'url'],
      key: 'url',
    },
    {
      title: '错误信息',
      dataIndex: ['data', 'error'],
      key: 'error',
    },
  ]
  onMounted(() => {
    getData()
  })
  const clickDataSource = ref([])
  const dataSource = ref([])
  const pvDataSource = ref([])
  const vueErrorDataSource = ref([])
  const resourceErrorDataSource = ref([])
  const ajaxErrorDataSource = ref([])

  const getData = () => {
    axios.get('http://localhost:3000/data').then((res) => {
      dataSource.value = res.data.data.performance
      clickDataSource.value = res.data.data['ui.click']
      pvDataSource.value = res.data.data.pv
      vueErrorDataSource.value = res.data.data.vueError
      resourceErrorDataSource.value = res.data.data.resourceError
      ajaxErrorDataSource.value = res.data.data.ajaxError
    })
  }
</script>
