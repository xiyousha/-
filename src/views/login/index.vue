<template>
  <div class="title">
    <div>登录页面</div>
  </div>
  <el-switch v-model="flag" @change="changeSwitch"></el-switch>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const flag = ref(true);

  const changeSwitch = (val:boolean) => {
    console.log(val)
    console.log(flag.value)
  }
</script>

<style scoped lang="less">
  .title {
    color: red;

    & div {
      color: pink;
    }
  }

</style>