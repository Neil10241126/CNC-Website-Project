import { defineStore } from 'pinia';
import { useLoading } from 'vue-loading-overlay';

const vueLoadingStore = defineStore('vueLoading', {
  state: () => ({
    loading: {},
    loader: null, // 新增一個 loader
  }),
  actions: {
    showLoading() {
      this.loading = useLoading({
        active: true,
        canCancel: true,
        onCancel: this.onCancel,
      });
      this.loader = this.loading.show();
    },
    hideLoading() {
      this.loader.hide(); // 讀完資料關閉 vue loading效果
    },
  },
  getters: {},
});
export default vueLoadingStore;
