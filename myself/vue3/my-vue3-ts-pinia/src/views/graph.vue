<template>
  <div class="graph">
    <div id="dnd-wrap" ref={this.dndContainerRef}>
      <div data-type="rect" class="dragItem" id="dnd-rect" @onMouseDown="startDrag">
        Rect
      </div>
      <div data-type="circle" class="dragItem" id="dnd-circle" @onMouseDown="startDrag">
        Circle
      </div>
    </div>

    <div id="content" />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { Graph, Addon } from '@antv/x6';
// const { Dnd } = Addon
onMounted(() => {
  const graph = new Graph({
    container: document.getElementById('content'),
    width: 800,
    height: 600,
    background: {
      color: '#fffbe6', // 设置画布背景颜色
    },
    grid: {
      size: 10,      // 网格大小 10px
      visible: true, // 渲染网格背景
    },
    history: true,
    snapline: {
      enabled: true,
      sharp: true,
    },
    scroller: {
      enabled: true,
      pageVisible: false,
      pageBreak: false,
      pannable: true,
    },
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
  })

  const source = graph.addNode({
    x: 130,
    y: 30,
    width: 100,
    height: 40,
    attrs: {
      label: {
        text: 'Hello',
        fill: '#6a6c8a',
      },
      body: {
        stroke: '#31d0c6',
        strokeWidth: 2,
      },
    },
  })

  const target = graph.addNode({
    x: 180,
    y: 160,
    width: 100,
    height: 40,
    attrs: {
      label: {
        text: 'World',
        fill: '#6a6c8a',
      },
      body: {
        stroke: '#31d0c6',
        strokeWidth: 2,
      },
    },
  })

  graph.addEdge({ source, target })
  graph.centerContent()
  // const dnd = new Dnd({
  //   target: graph,
  //   scaled: false,
  //   animation: true,
  //   dndContainer: document.getElementById('dndContainer')
  // })
})
const startDrag = (e) => {
  console.log(e)
}
</script>
<style lang='scss' scoped>
.graph {
  .dragItem {
    cursor: pointer;
  }
}
</style>