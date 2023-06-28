<template>
  <div class="modal fade" id="exampleModal2" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h4 class="modal-title text-light" id="exampleModalLabel">新增商品</h4>
          <button type="button" class="btn-close btn-close-white"
          data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-4">
                <div>
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input type="email" class="form-control" id="imageUrl"
                    v-model="data.imageUrl" placeholder="請輸入網址">
                </div>
                <img class="img-fluid " :src="data.imageUrl" alt="產品圖片"
                  v-if="data.imageUrl">
              </div>
              <div class="col-8">
                <div class="mb-3">
                  <label for="productName" class="form-label">商品名稱</label>
                  <input type="email" class="form-control" id="productName"
                  v-model="data.title" placeholder="請輸入名稱">
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="category" class="form-label">類別</label>
                    <input type="email" class="form-control" id="category"
                    v-model="data.category" placeholder="請輸入類別">
                  </div>
                  <div class="col">
                    <label for="unit" class="form-label">單位</label>
                    <input type="email" class="form-control" id="unit"
                    v-model="data.unit" placeholder="請輸入單位">
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col">
                    <label for="originPrice" class="form-label">原價</label>
                    <input type="email" class="form-control" id="originPrice"
                    v-model.number="data.origin_price" placeholder="請輸入原價">
                  </div>
                  <div class="col">
                    <label for="price" class="form-label">售價</label>
                    <input type="email" class="form-control" id="price"
                    v-model.number="data.price" placeholder="請輸入售價">
                  </div>
                </div>
                <hr>
                <div class="mb-3">
                  <label for="description" class="form-label">商品描述</label>
                  <textarea class="form-control" id="description" rows="2"
                  v-model="data.description"></textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">內容</label>
                  <textarea class="form-control" id="content" rows="2"
                  v-model="data.content"></textarea>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                  :true-value="1" :false-value="0"
                  v-model="data.is_enabled" id="isEnable">
                  <label class="form-check-label" for="isEnable">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary"
            @click="updateProduct()">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ['getProducts', 'isNew'],
  data() {
    return {
      productModal: '',
      data: {},
    };
  },
  methods: {
    updateProduct() {
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product`;
      let methods = 'post';
      if (this.isNew === false) {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.data.id}`;
        methods = 'put';
      }
      this.$http[methods](url, { data: this.data })
        .then(() => {
          // console.log(res.data.message);
          this.productModal.hide();
          this.getProducts();
        }).catch(() => {
          // alert(err.response.data.message);
          // console.log(err.response.data.message);
        });
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.modal);
  },
};
</script>
