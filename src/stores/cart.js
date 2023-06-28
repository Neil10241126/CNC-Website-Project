import { defineStore, mapState } from 'pinia';
import axios from 'axios';
import alertStore from './sweetAlert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  state: () => ({
    cartData: '', // 用戶購物車資料
  }),
  actions: {
    getCart() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data;
          // console.log('購物車: ', this.cartData);
        });
    },
    addCart(id) {
      const data = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          this.toastAlert.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.getCart();
        });
    },
    deleteCartId(id) {
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          this.toastAlert.fire({
            icon: 'success',
            title: res.data.message,
          });
          this.getCart();
        });
    },
  },
  getters: {
    ...mapState(alertStore, ['toastAlert']),
  },
});

export default cartStore;
