import { defineStore, mapActions, mapState } from 'pinia';
import axios from 'axios';
import cartStore from './cart';
import alertStore from './sweetAlert2';

const { VITE_URL, VITE_PATH } = import.meta.env;

const couponStore = defineStore('coupon', {
  state: () => ({
    data: {
      code: '', // 優惠券資料
    },
  }),
  actions: {
    getCoupon() {
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, { data: this.data })
        .then(() => {
          // console.log(res.data);
          this.toastAlert.fire({
            icon: 'success',
            title: '已套用優惠券',
          });
          this.getCart();
          // console.log('訂單資訊: ', this.user);
        }).catch((err) => {
          this.toastAlert.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
    ...mapActions(cartStore, ['getCart']),
  },
  getters: {
    ...mapState(alertStore, ['toastAlert']),
  },
});

export default couponStore;
