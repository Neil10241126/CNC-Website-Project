<template>
  <router-view />
</template>

<script>
// AOS 視差滾動
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init({
      duration: 600, // 效果持續時間 : 上限 3000 毫秒
    });
  },
};
</script>
