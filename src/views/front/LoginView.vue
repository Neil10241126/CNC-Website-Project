<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="card col-4">
      <div class="card-header text-center py-3 d-flex justify-content-center align-items-center">
        <img src="public/userLogin.svg" alt="userLogin">
        <h3 class="fs-3 lh-base m-0 ms-3">請先登入</h3>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="address" class="form-label">帳號</label>
          <input type="email" class="form-control" id="address"
           v-model="user.username" placeholder="請輸入帳號">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control" id="password"
           v-model="user.password" placeholder="請輸入密碼">
        </div>
      </div>
      <div class="card-footer border-0">
        <div class="d-grid">
          <button class="btn btn-primary"
            @click="login()">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$http.post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          // 存放token、有效時間expired
          const { expired, token } = res.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `CookieToken=${token}; expires=${new Date(expired)};`;
          // 轉址
          this.$router.push('/admin/products');
        }).catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
  },
};
</script>
