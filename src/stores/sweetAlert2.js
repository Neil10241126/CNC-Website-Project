import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

const alertStore = defineStore('alert', {
  state: () => ({
    toastAlert: Swal.mixin({ // 吐司彈出提示
      toast: true, // 開啟 toast
      position: 'top-end', // 顯示位置
      showConfirmButton: false,
      timer: 2000, // 持續時間
      timerProgressBar: true,
    }),
    errorAlert: Swal.mixin({
      icon: 'error',
      confirmButtonText: '馬上填寫',
    }),
    couponAlert: Swal.mixin({
      icon: 'success',
      confirmButtonText: '已領取',
    }),
  }),
});

export default alertStore;
