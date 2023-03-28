<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="left">
        <ul>
          <li>a</li>
        </ul>
      </el-aside>
      <el-main>
        <svg-playground/>
      </el-main>
      <el-aside class="right">Aside</el-aside>
    </el-container>
  </div>
</template>

<script setup>
import SvgPlayground from './components/svg-playground.vue'
</script>

<style>
.common-layout {
  height: 100%;
  width: 100%;
}

.common-layout .el-container {
  height: 100%;
  width: 100%;
}

.el-aside .el-main {
  height: 100%;
  width: 20%;
  min-width: 200px;
}

.el-aside.left {
  border-right: 1px solid #ebeef5;
}

.el-aside.right {
  border-left: 1px solid #ebeef5;
}
</style>
