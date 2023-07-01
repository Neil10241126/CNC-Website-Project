<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true" ref="coupon">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ isNew ? '新增優惠券': '修改優惠券'}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label for="title" class="col-sm-2 col-form-label">標題</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" placeholder="行銷名稱"
              v-model="data.title">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="code" class="col-sm-2 col-form-label">優惠碼</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="code" placeholder="使用碼"
              v-model="data.code">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="percent" class="col-sm-2 col-form-label">折扣數</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="percent" placeholder="使用折扣"
              v-model.number="data.percent">
            </div>
          </div>
          <div class="mb-3 row">
            <label for="dueDate" class="col-sm-2 col-form-label">到期日</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="dueDate" placeholder="有效期限"
              v-model.number="data.due_date">
            </div>
          </div>
          <div class="mb-3 row align-items-center">
            <label for="dueDate" class="col-sm-2 col-form-label">到期日</label>
            <div class="col-sm-5">
              <!-- <input type="date" class="form-control" id="dueDate" ref="timeValue"
              value="2023-07-01"> -->
              <input type="date" class="form-control" id="dueDate" ref="timeValue"
              v-model.number="timeFormat.valueAsNumber">
            </div>
            <div class="col-sm-5">
              <input type="text" class="form-control text-danger"
              :value="timeFormat" readonly>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox"
            :true-value="1" :false-value="0" id="isEnable"
            v-model.number="data.is_enabled">
            <label class="form-check-label" for="isEnable">
              是否啟用
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-secondary"
          @click="updateProduct()">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: ['getCoupon', 'isNew'],
  data() {
    return {
      couponModal: {},
      data: {},
      timeFormat: '111',
    };
  },
  methods: {
    updateProduct() { // 新增、修改優惠券
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon`;
      let methods = 'post';
      if (this.isNew === false) {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${this.data.id}`;
        methods = 'put';
      }
      this.$http[methods](url, { data: this.data })
        .then(() => {
          // console.log(res.data.message);
          this.couponModal.hide();
          this.getCoupon();
        }).catch(() => {
          // alert(err.response.data.message);
          // console.log(err.response.data.message);
        });
    },
    changeTime() {
      // // const date = document.querySelector(this.$refs.timeValue);
      // this.$refs.timeValue('change', (e) => {
      //   const dateTime = new Date(e.target.value);
      //   timeFormat = Date.parse(dateTime) / 1000;
      // });
      // console.log(timeFormat);
      return this.timeFormat;
    },
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.coupon);
    // console.log(this.$refs.timeValue.valueAsNumber);
    console.log(new Date(2300000000332));

    // const date = document.querySelector('#dueDate');
    // date.addEventListener('change', (e) => {
    //   const dateTime = new Date(e.target.value);
    //   console.log(Date.parse(dateTime));
    //   console.log(Date.parse(dateTime) / 1000);
    // });
  },
};
</script>
