<template>
  <div class="home bg-primary">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <h1 class="logo">
          <RouterLink class="navbar-brand" to="/home">Navbar</RouterLink>
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
         data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item text-center">
              <RouterLink to="/home" class="nav-link text-light border
              border-primary border-3 fs-5" aria-current="page">首頁</RouterLink>
            </li>
            <li class="nav-item  text-center ms-md-3">
              <RouterLink to="/course/category/all" class="nav-link text-light border
              border-primary border-3 fs-5" aria-current="page">課程</RouterLink>
            </li>
            <li class="nav-item text-center ms-md-3">
              <RouterLink to="/about" class="nav-link text-light border
              border-primary border-3 fs-5">關於我們</RouterLink>
            </li>
          </ul>
          <div class="d-grid gap-2 mt-5 mt-md-0 ms-md-3">
            <button type="button" class="btn-login btn btn-secondary px-sm-3 text-light"
            aria-controls="offcanvasRight"
            @click="cartOffCanvas.show()">購物車</button>
          </div>
        </div>
      </div>
    </nav>
    <!--購物車 offcanvas -->
    <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" ref="cart"
     aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <div class="d-flex align-items-center text-light">
          <i class="bi bi-bag fs-3 me-2"></i>
          <h5 id="offcanvasRightLabel" class="fs-2 m-0">購物車</h5>
        </div>
        <button type="button" class="btn-close btn-close-white text-reset"
         data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <cartItem
        :cart-off-canvas="cartOffCanvas"></cartItem>
      </div>
    </div>
    <RouterView></RouterView>
    <footer class="footer container py-5 bg-primary">
      <div class="row">
        <div class="col-12 col-md-5">
          <h3 class="text-light mb-3">聯絡方式</h3>
          <ul class="footer-connect p-0 mb-2" style="list-style: none;">
            <li>
              <a href="#" class="text-light">
                <p class="mb-2"><i class="bi bi-pin-map me-3"></i>台北市大安區中正路120號</p>
              </a>
            </li>
            <li>
              <a href="tel:+02-2218720" class="text-light">
                <p class="mb-2"><i class="bi bi-telephone-plus me-3"></i>02-2218720</p>
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com" class="text-light">
              <p class="mb-2"><i class="bi bi-envelope me-3"></i>info@example.com</p>
            </a>
            </li>
          </ul>
          <div class="link-group">
            <a class="align-basline text-light" href="#"><i class="bi bi-twitter fs-3"></i></a>
            <a class="align-basline mx-3 text-light" href="#">
              <i class="bi bi-facebook fs-3"></i></a>
            <a class="align-basline text-light" href="#"><i class="bi bi-youtube fs-3"></i></a>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <h3 class="text-light text-end">訂閱我們</h3>
          <div class="input-group my-3">
            <input type="email" class="form-control border-0 rounded-0" v-model="userEmail"
             placeholder="請輸入 Email 來獲取優惠代碼">
            <button type="button" class="btn btn-secondary text-light border-0 rounded-0"
            @click="getCoupon()">訂閱</button>
          </div>
          <p class="text-light text-end"><small>© Copyright 2023 本網站僅個人練習作品，非商業用途</small></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/js/dist/collapse';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import { RouterLink, RouterView } from 'vue-router';
import { mapState } from 'pinia';
import cartItem from '../components/front/CartItem.vue';
import alertStore from '../stores/sweetAlert2';

export default {
  data() {
    return {
      cartOffCanvas: {},
      userEmail: '',
    };
  },
  components: {
    RouterLink,
    RouterView,
    cartItem,
  },
  methods: {
    getCoupon() {
      if (this.userEmail === '') {
        this.errorAlert.fire({
          title: 'Email 尚未填寫',
        });
      } else {
        this.couponAlert.fire({
          title: '<strong>優惠碼 <u>testCode</u></strong>',
          color: '#eb40ad',
        });
      }
    },
  },
  computed: {
    ...mapState(alertStore, ['couponAlert', 'errorAlert']),
  },
  mounted() {
    this.cartOffCanvas = new Offcanvas(this.$refs.cart);
  },
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

.logo .navbar-brand {
  background-image: url('../assets/img/logo-精密學堂.png');
  display: block;
  width: 224px;
  height: 75px;
  @include hide-text
}
.navbar {
  .nav-link {
    &:hover, &:focus {
      border: 2.4px solid var(--secondary) !important;
    }
  }
  .btn-login {
    border-radius: 0;
    @include desktop {
      border-radius: 50rem;
    }
  }
}
.footer-connect, .link-group {
  a {
    transition: all 0.2s;
    &:hover {
      color: var(--secondary) !important;
    }
  }
}
</style>
