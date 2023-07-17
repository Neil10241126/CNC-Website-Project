<template>
  <div class="mb-4" v-if="!cartData?.carts?.length">
    <h4 class="text-light">購物車尚未有商品</h4>
  </div>
  <ul v-else class="card-group d-block ps-0 overflow-auto" style="max-height: 400px;">
    <li class="card border-0 bg-primary mb-3" style="max-width: 540px;"
      v-for="cart in cartData.carts" :key="cart.id">
      <div class="row g-0 border-bottom border-light">
        <div class="col-4">
          <img :src="cart.product.imageUrl" class="img-fluid pt-4" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title text-light fs-4">{{ cart.product.title }}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text mb-0 text-light fs-5">$ {{ cart.final_total }}</p>
              <a href="#" class="text-light"
                @click.prevent="deleteCartId(cart.id, cart.product.id)">
                <i class="bi bi-trash fs-5"></i></a>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div class="d-flex justify-content-between">
    <p class="fs-3 mb-0 text-light">$ {{ cartData.final_total }}</p>
    <RouterLink to="/cart" class="btn btn-secondary text-light px-5"
    :class="{'disabled': !cartData.carts?.length }"
    @click="cartOffCanvas.hide()">立即結帳</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';

export default {
  props: ['cartOffCanvas'],
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'deleteCartId']),
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
</style>
