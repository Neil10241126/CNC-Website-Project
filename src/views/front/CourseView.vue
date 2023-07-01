<template>
  <section class="banner position-relative"
   style="margin-top: 95px;">
    <img src="../../assets/img/course-banner.jpg" alt="" class="container-fluid"
    style="max-height: 700px; object-fit: cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center
     align-items-center"
      style="background: rgba(24, 29, 56, .4);">
      <h2 class="banner-title fs-1 text-light">產品細節</h2>
    </div>
  </section>
  <section class="container my-5">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-5">
          <img :src="product.imageUrl" class="img-fluid rounded-start h-100" alt="..."
            style="object-fit: cover;">
        </div>
        <div class="col-md-7 d-flex flex-column">
          <div class="card-body p-4">
            <h3 class="card-title border-bottom border-3 border-primary pb-3">
              {{ product.title }}</h3>
            <p class="card-text mt-4">{{ product.description }}</p>
          </div>
          <div class="card-footer px-4 pt-0 pb-3">
              <span class="fs-1">NT$ {{ product.price }}</span>
              <div class="d-flex justify-content-between mt-2">
                <div class="btn-group d-block" style="width: 85%;">
                  <button type="button" class="btn btn-primary w-50"
                  @click="addCart(product.id)">加入購物車</button>
                  <button type="button" class="btn btn-danger w-50">立刻上課</button>
                </div>
                <button type="button" class="btn btn-outline-secondary">
                  <i class="bi bi-heart"></i></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'bootstrap/js/dist/toast';
import { mapActions } from 'pinia';
import cartStore from '../../stores/cart';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: [], // 產品細節資訊
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          // console.log('產品細節: ', this.product);
        });
    },
    ...mapActions(cartStore, ['addCart']),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
@import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
.banner-title {
  @include pad {
    font-size: 64px !important;
  }
}
</style>
