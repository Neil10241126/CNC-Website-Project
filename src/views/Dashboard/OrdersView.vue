<template>
  <div class="py-4">
    <h2 class="fs-1 lh-base m-0">訂單列表</h2>
  </div>
  <table class="table table-hover border align-middle">
    <thead>
      <tr class="table-dark">
        <th>訂單編號</th>
        <th>聯絡人</th>
        <th>電子郵件</th>
        <th>訂單日期</th>
        <th>是否付款</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ order.user.email }}</td>
        <td>{{ orderDate }}</td>
        <td :class="[{'text-success': order.is_paid}, {'text-danger': !order.is_paid}]">
          {{ order.is_paid ? '已付款' : '未付款' }}
        </td>
      </tr>
    </tbody>
  </table>
  <!-- PagiNation -->
  <nav aria-label="Page navigation example">
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
  </nav>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orders: [],
      pages: {},
    };
  },
  methods: {
    checkAdmin() {
      this.$http.post(`${VITE_URL}/v2/api/user/check`)
        .then(() => {
          this.getOrders();
        }).catch((err) => {
          alert(err.response.data.message);
          this.$router.push('/login');
        });
    },
    getOrders() {
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data.orders;
          console.log('訂單列表:', this.orders);
          this.pages = res.data.pagination;
          // console.log('分頁:', this.pages);
        }).catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    orderDate() {
      let date = [];
      this.orders.forEach((item) => {
        const timeStamp = new Date(item.create_at);
        date = `${timeStamp.getFullYear()}/${timeStamp.getMonth() + 1}/${timeStamp.getDate()}`;
      });
      return date;
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
