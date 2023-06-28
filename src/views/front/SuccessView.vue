<template>
  <section class="banner position-relative"
   style="margin-top: 95px;">
    <img src="public/img/course-banner.jpg" alt="">
    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center
     align-items-center"
      style="background: rgba(24, 29, 56, .8);">
      <div class="text-light text-center">
        <h2 class="fs-1 mb-3">付款成功<i class="bi bi-check-circle ms-3"></i></h2>
        <p class="fs-4">訂單編號<span class="text-secondary ms-2">-NYrYL9piq0Jf0I39u0H</span></p>
        <p class="fs-4">感謝您的購買 !</p>
        <button type="button" class="btn btn-lg px-5 btn-outline-secondary text-light"
        @click="this.$router.push('/home')">  繼 續 購 物</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';
</style>
