<template>
  <div class="modal fade" id="delModal" tabindex="-1"
     aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h4 class="modal-title text-light" id="exampleModalLabel">刪除商品</h4>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
           aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{ data.title }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger"
            @click="deleteProduct()">確定刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ['getProducts'],
  data() {
    return {
      deleteModal: '',
      data: {},
    };
  },
  methods: {
    deleteProduct() {
      this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.data.id}`)
        .then(() => {
          this.getProducts();
          this.deleteModal.hide();
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.delModal);
  },
};
</script>
