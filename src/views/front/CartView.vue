<template>
  <section class="container py-5 text-light" style="margin-top: 99px;">
    <div class="cart_item">
      <div class="cart_title d-flex align-items-center mb-4 mb-sm-0">
        <i class="bi bi-cart3 fs-1"></i>
        <h3 class="fs-1 mb-0 ms-3">購物車</h3>
      </div>
      <ul class="nav">
        <li class="nav_item p-2 bg-secondary"><p class="mb-0">步驟一<br>確認購物車</p></li>
        <li class="nav_item p-2"><p class="mb-0">步驟二<br>訂單資訊</p></li>
        <li class="nav_item p-2"><p class="mb-0">步驟三<br>結帳</p></li>
      </ul>
    </div>
    <hr>
    <div class="row g-4">
      <div class="col-12 col-md-8">
        <table class="table align-middle text-center text-light">
          <thead>
            <tr>
              <th>圖片</th>
              <th>課程</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cart in cartData.carts" :key="cart.id">
              <td style="max-width: 150px;">
                <img :src="cart.product.imageUrl" class="img-fluid" alt="">
              </td>
              <td>{{ cart.product.title }}</td>
              <td>$ {{ cart.final_total }}</td>
              <td><a href="#" @click.prevent="deleteCartId(cart.id)">
                <i class="bi bi-trash3 text-light"></i></a></td>
            </tr>
          </tbody>
        </table>
        <RouterLink to="/course/category/all" class="btn btn-outline-light mt-2"
          >返回課程列表</RouterLink>
      </div>
      <div class="col-12 col-md-4 p-3">
        <h4 class="fs-3 mb-3">帳單資訊</h4>
        <ul class="border-top border-bottom pt-4 mb-4 fs-5">
          <li class="d-flex justify-content-between align-items-center">
            <p>購課數量</p>
            <p>{{ cartData.carts?.length }} 門</p>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <p>金額</p>
            <p>NT$ {{ cartData.total }}</p>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <p>折扣</p>
            <p>NT$ -{{ cartData.total - cartData.final_total }}</p>
          </li>
          <div class="input-group mb-3 mt-5">
            <input type="text" class="form-control" placeholder="輸入優惠代碼"
             aria-label="Recipient's username" aria-describedby="button-addon2"
             v-model="data.code">
            <button class="btn btn-outline-success" type="button" id="button-addon2"
              @click="getCoupon()">Button</button>
          </div>
        </ul>
        <div>
          <div class="d-flex justify-content-between align-items-center fs-3">
            <p>總金額</p>
            <p>NT$ {{ cartData.final_total }}</p>
          </div>
          <RouterLink to="/order" class="btn btn-lg btn-secondary text-light w-100"
          >確認</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import couponStore from '../../stores/coupon';

// const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      // cartData: {},
      // loader: {},
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(cartStore, ['deleteCartId']),
    // getCart() {
    //   this.loader = this.$loading.show({
    //     active: true,
    //     canCancel: true,
    //     onCancel: this.onCancel,
    //   });
    //   this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
    //     .then((res) => {
    //       this.cartData = res.data.data;
    //       this.loader.hide();
    //     });
    // },
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
    ...mapState(couponStore, ['data', 'getCoupon', 'final_total']),
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
.table {
  font-size: 14px;
  @include pad {
    font-size: 16px;
  }
  @include desktop {
    font-size: 20px;
  }
}
</style>
