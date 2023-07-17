<template>
  <section class="banner position-relative"
   style="margin-top: 95px;">
    <img src="../../assets/img/course-banner.jpg" alt="" class="container-fluid"
     style="max-height: 700px; object-fit: cover;">
    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center
     align-items-center"
      style="background: rgba(24, 29, 56, .4);">
      <h2 class="banner-title fs-1 text-light">課程列表</h2>
    </div>
  </section>
  <section class="container my-5">
    <div class="row">
      <aside class="col-12 col-md-3">
        <ul class="course-nav nav flex-column mb-5 mb-md-0">
          <li class="nav-item" v-for="item in category" :key="item + 1234">
            <RouterLink :to="`/course/category/${item.cateId}`"
             class="nav-link active text-light fs-3 border"
             aria-current="page" @click.prevent="">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </aside>
      <RouterView class="col-12 col-md-9"
        :category="category"></RouterView>
    </div>
  </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {
    return {
      category: [
        { cateId: 'all', name: '全部課程', cate: '' },
        {
          cateId: 'lathe', name: 'CNC 車床', cate: '車床', teacher: 'Benson',
        },
        {
          cateId: 'milling', name: 'CNC 銑床', cate: '銑床', teacher: 'Mike',
        },
        {
          cateId: 'general', name: '專業通識', cate: '通識', teacher: 'James',
        },
        {
          cateId: 'certify', name: '證照檢定', cate: '證照', teacher: 'Frank',
        },
      ],
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style lang="scss" scoped>
.banner-title {
  @include pad {
    font-size: 64px !important;
  }
}
.course-nav a {
  &:hover, &:focus {
    background: var(--secondary);
  }
}
</style>
