<template>
  <section class="container py-5 text-light" style="margin-top: 99px;">
    <div class="cart_item">
      <div class="cart_title d-flex align-items-center mb-4 mb-sm-0">
        <i class="bi bi-exclamation-circle fs-1"></i>
        <h3 class="fs-1 mb-0 ms-3">付款資訊</h3>
      </div>
      <ul class="nav">
        <li class="nav_item p-2"><p class="mb-0">步驟一<br>確認購物車</p></li>
        <li class="nav_item p-2"><p class="mb-0">步驟二<br>訂單資訊</p></li>
        <li class="nav_item p-2 bg-secondary"><p class="mb-0">步驟三<br>結帳</p></li>
      </ul>
    </div>
    <hr>
    <div>
      <table class="table text-light align-middle text-center">
        <thead>
          <tr>
            <th>圖片</th>
            <th>課程</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="py-3" style="max-width: 150px;">
              <img :src="item.product.imageUrl" alt=""></td>
            <td>{{ item.product.title }}</td>
            <td>$ {{ item.product.price }}</td>
          </tr>
        </tbody>
      </table>
      <p class="text-end fs-3">總金額 NT$ {{ order.total }}</p>
      <ul class="pay_info p-4 mb-0">
        <li class="row border-bottom mb-3">
          <p class="col-4 col-lg-5">電子信箱 :</p>
          <p class="col-8 col-lg-7">{{ user.email }}</p>
        </li>
        <li class="row border-bottom mb-3">
          <p class="col-4 col-lg-5">姓名 :</p>
          <p class="col-8 col-lg-7">{{ user.name }}</p>
        </li>
        <li class="row border-bottom mb-3">
          <p class="col-4 col-lg-5">電話 :</p>
          <p class="col-8 col-lg-7">{{ user.tel }}</p>
        </li>
        <li class="row border-bottom mb-3">
          <p class="col-4 col-lg-5">地址 :</p>
          <p class="col-8 col-lg-7">{{ user.address }}</p>
        </li>
      </ul>
      <div class="text-end pe-4">
        <RouterLink to="/home" class="btn btn-outline-light px-4">取消</RouterLink>
        <RouterLink to="/success" class="btn btn-secondary text-light px-4 ms-3"
        @click="payOrder()">確認付款</RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import orderStore from '../../stores/order';

export default {
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(orderStore, ['getOrder', 'payOrder']),
  },
  computed: {
    ...mapState(orderStore, ['order', 'orderId', 'user']),
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap-icons/font/bootstrap-icons.css';
.cart_item {
  @include pad {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav_item {
  width: 33%;
  font-size: 14px;
  border: 2px solid var(--secondary);
  border-right: none;
  &:nth-child(3) {
    border-right: 2px solid var(--secondary);
  }
  @include pad {
    font-size: 18px;
    width: 110px;
  }
  @include desktop {
    font-size: 20px;
    width: 135px;
  }
}
.table, .pay_info {
  font-size: 14px;
  @include pad {
    font-size: 16px;
  }
  @include desktop {
    font-size: 24px;
  }
}

</style>
