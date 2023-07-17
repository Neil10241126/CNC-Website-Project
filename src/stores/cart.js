import { defineStore, mapState } from 'pinia';
import axios from 'axios';
import alertStore from './sweetAlert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  state: () => ({
    cartData: {}, // 用戶購物車資料
    cartsID: [], // ID比對是否重複下單
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
      // 1. 利用 some() 判斷陣列是否有重複訂單ID
      const isRepeat = this.cartsID.some((item) => item === id);
      // 2. 若 true 則終止發送 AJAX， false 則加入訂單
      if (isRepeat) {
        this.toastAlert.fire({
          icon: 'error',
          title: '不可重複下單',
        });
      } else if (!isRepeat) {
        this.cartsID.push(`${id}`);
        // console.log('陣列資料', this.cartsID);
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
      }
    },
    deleteCartId(id, productId) {
      // 將 cartsID 內的產品資料同時刪除
      this.cartsID.forEach((item, index) => {
        if (productId === item) {
          this.cartsID.splice(index, 1);
        }
      });

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
