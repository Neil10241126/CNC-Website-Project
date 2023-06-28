<template>
  <div class="d-flex justify-content-between align-items-center py-4">
    <h2 class="fs-1 lh-base m-0">商品列表</h2>
    <button type="button" class="btn btn-outline-primary"
      @click="openModal('add')">新增商品</button>
  </div>
  <table class="table table-hover border align-middle">
    <thead>
      <tr class="table-dark">
        <th>項次</th>
        <th>類別</th>
        <th>商品名稱</th>
        <th>原價</th>
        <th>售價</th>
        <th>是否啟用</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="product.id">
        <td>{{ index + 1 }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.origin_price }}</td>
        <td>{{ product.price }}</td>
        <td :class="[{'text-success': product.is_enabled}, {'text-danger': !product.is_enabled}]">
          {{ product.is_enabled ? '啟用' : '未啟用' }}
        </td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info"
              @click="openModal('put', product)">編輯</button>
            <button type="button" class="btn btn-danger"
              @click="openModal('del', product)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- PagiNation -->
  <PagiNation
    :pages="pages"
    :get-products="getProducts"></PagiNation>

  <!-- ProdutModal -->
  <ProductModal ref="modal"
    :get-products="getProducts"
    :is-new="isNew"></ProductModal>
  <!-- DeleteModal -->
  <DeleteModal ref="delModal"
    :get-products="getProducts"></DeleteModal>

</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PagiNation from '@/components/PagiNation.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      isNew: false,
      pages: '',
    };
  },
  components: {
    ProductModal,
    DeleteModal,
    PagiNation,
  },
  methods: {
    checkAdmin() {
      this.$http.post(`${VITE_URL}/v2/api/user/check`)
        .then(() => {
          this.getProducts();
        }).catch(() => {
          // alert(err.response.data.message);
          this.$router.push('/login');
        });
    },
    getProducts(page = 1) {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          // console.log(res);
          // console.log('產品列表:', this.products);
          // console.log('分頁:', res.data.pagination);
          this.pages = res.data.pagination;
        });
    },
    openModal(status, product) {
      if (status === 'add') {
        this.isNew = true;
        this.$refs.modal.data = {};
        this.$refs.modal.productModal.show();
      } else if (status === 'put') {
        this.isNew = false;
        this.$refs.modal.data = { ...product };
        this.$refs.modal.productModal.show();
      } else if (status === 'del') {
        this.$refs.delModal.data = { ...product };
        this.$refs.delModal.deleteModal.show();
      }
    },
  },
  mounted() {
    // 取出 token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)CookieToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    // 驗證 token 是否為本人
    this.checkAdmin();
  },
};
</script>
