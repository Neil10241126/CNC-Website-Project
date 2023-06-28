<template>
  <section class="container py-5 text-light" style="margin-top: 99px;">
    <div class="cart_item">
      <div class="cart_title d-flex align-items-center mb-4 mb-sm-0">
        <i class="bi bi-exclamation-circle fs-1"></i>
        <h3 class="fs-1 mb-0 ms-3">填寫訂單</h3>
      </div>
      <ul class="nav">
        <li class="nav_item p-2"><p class="mb-0">步驟一<br>確認購物車</p></li>
        <li class="nav_item p-2 bg-secondary"><p class="mb-0">步驟二<br>訂單資訊</p></li>
        <li class="nav_item p-2"><p class="mb-0">步驟三<br>結帳</p></li>
      </ul>
    </div>
    <hr>
    <div class="row g-4">
      <div class="col-12 col-md-8 pe-5">
        <v-Form v-slot="{ errors }">
          <div class="mb-4">
            <label for="OrderName" class="form-label fs-3">姓名</label>
            <Field id="OrderName" name="姓名" class="form-control form-control-lg"
            :class="[{ 'is-invalid': errors['姓名'] }]" rules="required"
             placeholder="ex: 王大明" v-model="data.user.name"></Field>
             <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="tel" class="form-label fs-3">電話</label>
            <Field id="tel" name="電話" class="form-control form-control-lg"
             :class="[{ 'is-invalid': errors['電話'] }]" rules="required|digits:10"
             placeholder="ex: 0918898939" v-model="data.user.tel"></Field>
             <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="email" class="form-label fs-3">電子信箱</label>
            <Field id="email" name="電子信箱" class="form-control form-control-lg"
             :class="[{ 'is-invalid': errors['電子信箱'] }]" rules="required|email"
             placeholder="ex: cnc@gmai.com" v-model="data.user.email"></Field>
             <ErrorMessage name="電子信箱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="address" class="form-label fs-3">聯絡地址</label>
             <Field id="address" name="地址" class="form-control form-control-lg"
             :class="[{ 'is-invalid': errors['地址'] }]" rules="required"
             placeholder="ex: 台北市中正區光明路1288號" v-model="data.user.address"></Field>
             <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="exampleFormControlTextarea1" class="form-label fs-3">訊息</label>
            <textarea class="form-control form-control-lg"
             id="exampleFormControlTextarea1" rows="3" style="height: 150px"
             v-model="data.message"></textarea>
          </div>
        </v-Form>
      </div>
      <div class="col-12 col-md-4 p-3">
        <h4 class="fs-3 mb-3">金額確認</h4>
        <ul class="border-top border-bottom pt-4 mb-4 fs-5">
          <li class="d-flex justify-content-between align-items-center">
            <p>總金額</p>
            <p>NT$ {{ cartData.total }}</p>
          </li>
          <li class="d-flex justify-content-between align-items-center">
            <p>折扣</p>
            <p>NT$ 0</p>
          </li>
        </ul>
        <div>
          <div class="fs-3 text-end">
            <p>NT$ {{ cartData.final_total }}</p>
          </div>
          <button type="button" class="btn btn-lg btn-secondary text-light w-100"
          @click="createOrder()">結帳</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 引入 VeeValidate、rules、i18n 等套件
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, digits } from '@vee-validate/rules';
import { localize, loadLocaleFromURL } from '@vee-validate/i18n';
// 引入 pinia 的 cart、order 資源
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import orderStore from '../../stores/order';
// 定義 useOrderStore 方法來使用 orderStore元件
const useOrderStore = orderStore();

const { VITE_URL, VITE_PATH } = import.meta.env;

loadLocaleFromURL('zh_TW.json');
configure({
  generateMessage: localize('zh_TW'), // 變更為繁體中文語系訊息
  validateOnInput: true, // 一輸入就執行驗證
});
defineRule('required', required);
defineRule('email', email);
defineRule('digits', digits);

export default {
  data() {
    return {
      data: { // 客戶訂單 API post 參數
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    'v-Form': Form,
    Field,
    ErrorMessage,
  },
  methods: {
    createOrder() {
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data: this.data })
        .then((res) => {
          // pinia方法 $patch 寫入訂單 ID
          useOrderStore.$patch({
            orderId: res.data.orderId,
          });
          this.getCart();
          this.$router.push('/pay');
        }).catch(() => {
          // console.log(err);
        });
    },
    ...mapActions(cartStore, ['getCart']),
  },
  computed: {
    ...mapState(cartStore, ['cartData']),
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
</style>
