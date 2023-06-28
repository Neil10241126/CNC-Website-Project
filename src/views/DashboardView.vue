<template>
  <div class="container">
    <nav class="row pt-3">
      <div class="rounded-3 position-fixed top-0 bottom-0 my-3"
       style="background: #0C1228;max-width: 13.75rem;">
        <div class="d-flex justify-content-center align-items-center py-4">
          <img src="public/dashboard.svg" alt="Dashboard">
          <h2 class="fs-3 lh-base m-0 ms-2 text-light">Dashboard</h2>
        </div>
        <hr class="m-0 border border-light opacity-100">
        <div class="py-4 d-flex flex-column justify-content-between">
          <div class="d-grid gap-1">
            <RouterLink to="/admin/products"
              class="d-block btn btn-outline-light btn-lg border-0 fs-6">
              商品管理</RouterLink>
            <RouterLink to="/admin/articles"
              class="d-block btn btn-outline-light btn-lg border-0 fs-6">
              文章管理</RouterLink>
            <RouterLink to="/admin/orders"
              class="d-block btn btn-outline-light btn-lg border-0 fs-6">
              訂單管理</RouterLink>
            <RouterLink to="/admin/coupon"
              class="d-block btn btn-outline-light btn-lg border-0 fs-6">
              優惠券管理</RouterLink>
          </div>
          <div class="position-absolute w-100 pe-4 bottom-0 mb-4">
            <button class="d-block btn btn-warning btn-lg w-100 fs-5">登出</button>
          </div>
        </div>
      </div>
      <div class="col-10" style="margin-left: 13.75rem;">
        <RouterView></RouterView>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style scoped>
</style>
