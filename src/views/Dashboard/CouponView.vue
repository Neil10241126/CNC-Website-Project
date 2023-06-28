<template>
  <div class="d-flex justify-content-between align-items-center py-4">
    <h2 class="fs-1 lh-base m-0">優惠券列表</h2>
    <button type="button" class="btn btn-outline-primary">新增優惠券</button>
  </div>
  <table class="table table-hover border align-middle">
    <thead>
      <tr class="table-dark">
        <th>標題</th>
        <th>優惠碼</th>
        <th>折扣數</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.code }}</td>
        <td>{{ `${coupon.percent} %` }}</td>
        <td>{{ deadLine(coupon.due_date) }}</td>
        <td :class="[{'text-success': coupon.is_enabled}, {'text-danger': !coupon.is_enabled}]">
          {{ coupon.is_enabled ? '已啟用' : '未啟用' }}
        </td>
        <td>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-info">編輯</button>
            <button type="button" class="btn btn-danger">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!-- PagiNation -->
  <!-- <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous"
          >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"
        v-for="page in pages.total_pages" :key="page + 1234">
        <a class="page-link" href="#"
          >{{ page }}</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"
          >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav> -->
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      coupons: [],
    };
  },
  methods: {
    getCoupon() { // 取得優惠券
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons`)
        .then((res) => {
          this.coupons = res.data.coupons;
          // console.log('優惠券列表: ', this.coupons);
        }).catch((err) => {
          console.log(err);
        });
    },

    deadLine(value) { // 轉換時間戳記
      const time = new Date(value);
      return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
    },
  },
  mounted() {
    this.getCoupon();
  },
};
</script>
