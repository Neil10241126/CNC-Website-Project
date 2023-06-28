import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_URL, VITE_PATH } = import.meta.env;

const orderStore = defineStore('order', {
  state: () => ({
    order: {},
    orderId: '', // 訂單ID
    user: {}, // 客戶資訊
    payState: false, // 付款狀態
  }),
  actions: {
    getOrder() {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.order = res.data.order;
          this.user = res.data.order.user;
          console.log(res.data);
          // console.log('訂單資訊: ', this.user);
        }).catch((err) => {
          console.log(err);
        });
    },
    payOrder() {
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${this.orderId}`)
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
});

export default orderStore;
