<!--
 * @Autor: flygg123
 * @Date: 2022-06-24 14:39:36
 * @LastEditTime: 2023-04-12 15:40:27
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <div class="outer">
    <div class="container">
      <!-- <router-view /> -->
      <test-h :test="count" @submit="skip"></test-h>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue';
import TestH from '@/components/TestH.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// console.log(t('common.account'))
const count = ref(33333);
const router = useRouter();
const skip = () => {
  router.push({ path: '/about' });
};
</script>
<style lang="scss" scoped></style>
