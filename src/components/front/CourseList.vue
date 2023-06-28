<template>
  <main>
    <div class="d-flex justify-content-between align-items-center mb-4 px-3
      border-start border-3">
      <h3 class="fs-3 text-light">{{ pageName }}</h3>
      <select class="form-select w-50 w-md-25" aria-label="Default select example"
        v-model="selectValue">
        <option selected disabled>排序</option>
        <option value="priceUp">價格由低至高</option>
        <option value="priceDown">價格由高至低</option>
      </select>
    </div>
    <ul class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 m-0 p-0 border-top">
      <li class="col" v-for="product in products" :key="product.id">
        <RouterLink :to="`/course/${product.id}`" class="card_link">
          <div class="card border-light h-100">
            <div class="card_img">
              <img :src="product.imageUrl" class="card-img-top" alt="..."
                style="object-fit: cover; height: 200px;">
                <button type="button" class="add_button btn btn-danger rounded-0 fs-5 w-100"
              ><i class="bi bi-bag me-3"></i>加入購物車</button>
            </div>
            <div class="card-body text-center">
              <p class="card-text fs-2">$ {{ product.price }}</p>
              <h5 class="card-title">{{ product.title }}</h5>
            </div>
            <div class="m-2">
              <span class="badge rounded-pill bg-success fs-6">{{ product.category }}</span>
            </div>
            <div class="row g-0 text-center border-top border-primary border-2">
              <p class="col border-end border-primary border-2 m-0 py-2">Mike</p>
              <p class="col m-0 py-2">11.0 Hrs</p>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env;
const { RouterLink } = import.meta.env;

export default {
  props: ['category'],
  data() {
    return {
      products: [],
      pageId: this.$route.params.cateId,
      pageName: '全部課程',
      selectValue: '排序', // 排序參數值
    };
  },
  components: {
    RouterLink,
  },
  watch: {
    $route(to) {
      this.pageId = to.params.cateId;
      this.category.forEach((item) => {
        if (this.pageId === item.cateId) {
          this.getProducts(item.cate);
          this.pageName = item.name;
        }
      });
    },
    selectValue() {
      this.sortArray();
    },
  },
  methods: {
    getProducts(parmas) {
      let url = `${VITE_URL}/v2/api/${VITE_PATH}/products`;
      if (typeof parmas === 'string') {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/products/?category=${parmas}`;
      } else if (typeof parmas === 'number') {
        url = `${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${parmas}`;
      }
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.products;
          // console.log('客戶產品列表: ', this.products);
        }).catch(() => {
          // console.log(err);
        });
    },
    sortArray() {
      if (this.selectValue === 'priceUp') {
        this.products.sort((a, b) => a.price - b.price);
      } else if (this.selectValue === 'priceDown') {
        this.products.sort((a, b) => b.price - a.price);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

.card_link {
  .card_img {
    position: relative;
    overflow: hidden;
    .add_button {
      position: absolute;
      left: 0;
      bottom: -50px;
      transition: all 0.5s;
    }
  }
  &:hover {
    .add_button {
      bottom: 0;
    }
  }
}
</style>
