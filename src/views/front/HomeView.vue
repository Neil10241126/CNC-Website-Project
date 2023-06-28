<template>
  <section class="container-fluid position-relative p-0" style="margin-top: 95px;">
    <div id="carouselBanner" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" class="active"
         aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1"
         aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2"
         aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="public/img/index-banner-1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="public/img/index-banner-2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="public/img/index-banner-3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
    <div class="banner position-absolute top-0 start-0 w-100 h-100 d-flex
      align-items-center"
     style="background: rgba(24, 29, 56, .4);">
     <div class="container">
      <div class="row text-light">
        <div class="col-10">
          <p class="mb-0">最好的在線平台</p>
          <h2 class="banner-title fs-1">從CNC初學者到專家</h2>
          <strong class=" fs-4">打造您的一站式學習資源</strong>
          <button type="button" class="btn btn-secondary d-block
           px-md-4 mt-4" @click="$router.push('/course/category/all')">我要上課</button>
        </div>
        <div class="col-2 d-flex justify-content-end align-items-end">
          <div class="btn-group-vertical">
            <button class="btn btn-outline-secondary border border-3 border-secondary rounded"
            data-bs-target="#carouselBanner" data-bs-slide="prev">
              <span class="material-symbols-outlined align-middle">
                arrow_back
              </span>
            </button>
            <button class="btn btn-outline-secondary border border-3 border-secondary rounded mt-4"
            data-bs-target="#carouselBanner" data-bs-slide="next">
              <span class="material-symbols-outlined align-middle">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  </section>
  <section class="serve-section container my-5">
    <div class="mb-5 d-flex justify-content-center">
      <h3 class="section-title fs-1 text-light d-inline" data-aos="zoom-in">服務內容</h3>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
      <div class="col" data-aos="zoom-in-up">
        <div class="card text-center h-100 text-primary">
          <i class="bi bi-globe" style="font-size: 96px;"></i>
          <div class="card-body pb-4">
            <h5 class="card-title">再線學習</h5>
            <p class="card-text opacity-75">CNC課程靈活上課，隨時隨地學習，<br>
            讓你更自由地安排學習時間。</p>
          </div>
        </div>
      </div>
      <div class="col" data-aos="zoom-in-up">
        <div class="card text-center h-100 text-primary">
          <i class="bi bi-tools" style="font-size: 96px;"></i>
          <div class="card-body pb-4">
            <h5 class="card-title">工業知識</h5>
            <p class="card-text opacity-75">掌握產業趨勢與前瞻性技術，並從基<br>
              礎入門到高級技能，讓你成為行業內<br>
              的專家。</p>
          </div>
        </div>
      </div>
      <div class="col" data-aos="zoom-in-up">
        <div class="card text-center h-100 text-primary">
          <i class="bi bi-patch-check" style="font-size: 96px;"></i>
          <div class="card-body pb-4">
            <h5 class="card-title">獲得認證</h5>
            <p class="card-text opacity-75">獲得認證後，你將更有自信地談薪水<br>
              ，迎接更高的薪資待遇。</p>
          </div>
        </div>
      </div>
      <div class="col" data-aos="zoom-in-up">
        <div class="card text-center h-100 text-primary">
          <i class="bi bi-briefcase" style="font-size: 96px;"></i>
          <div class="card-body pb-4">
            <h5 class="card-title">企業媒合</h5>
            <p class="card-text opacity-75">為你提供最適合的企業媒合方案，讓<br>
              你找到理想的工作機會，展現你的專<br>
              業實力。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="brand-section container my-5">
    <div class="mb-5 d-flex justify-content-center">
      <h3 class="section-title fs-1 text-light d-inline" data-aos="fade-up">品牌宗旨</h3>
    </div>
    <div class="card border-0 mb-3 bg-primary">
      <div class="row g-0">
        <div class="col-md-6" data-aos="fade-right">
          <img src="public/img/index-brand-1.jpg" class="rounded-start" alt="brand-img-1">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center"
        data-aos="fade-right" style="padding: 10% 0">
          <div class="card-body">
            <h4 class="card-title fs-2 text-center text-light">以專業的CNC課程服務<br>，培養
              CNC人才</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="card border-0 mb-3 bg-primary">
      <div class="row g-0 flex-row-reverse">
        <div class="col-md-6" data-aos="fade-right">
          <img src="public/img/index-brand-2.jpg" class="rounded-end" alt="brand-img-1">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center"
        data-aos="fade-right" style="padding: 10% 0">
          <div class="card-body">
            <h4 class="card-title fs-2 text-center text-light">我們致力於提供最好的<br>CNC課
              程學習體驗</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="card border-0 mb-3 bg-primary">
      <div class="row g-0">
        <div class="col-md-6" data-aos="fade-right">
          <img src="public/img/index-brand-3.jpg" class="rounded-start" alt="brand-img-1">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center"
        data-aos="fade-right" style="padding: 10% 0">
          <div class="card-body">
            <h4 class="card-title fs-2 text-center text-light">為您的職業生涯開啟更多<br>門戶
              ，創造更多可能</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="skills-section container my-5">
    <div class="mb-5 d-flex justify-content-center">
      <h3 class="section-title fs-1 text-light d-inline" data-aos="fade-up">技能培育</h3>
    </div>
    <div class="row g-3 justify-content-center">
      <div class="col-lg-6 col-md-6">
        <div class="row g-3">
          <div class="col-lg-12" data-aos="fade-up">
            <RouterLink to="course/category/lathe">
              <div class="card bg-dark text-white overflow-hidden">
                <img src="public/img/index-skills-1.jpg" class="card-img" alt="...">
                <div class="position-absolute bottom-0 end-0 bg-secondary text-center p-2">
                  <h5 class="card-title mb-1">CNC 車床</h5>
                  <p class="card-text">3 門課程</p>
                </div>
              </div>
            </RouterLink>
          </div>
          <div class="col-lg-6" data-aos="fade-up">
            <RouterLink to="course/category/lathe">
              <div class="card bg-dark text-white overflow-hidden">
                <img src="public/img/index-skills-2.jpg" class="card-img" alt="...">
                <div class="position-absolute bottom-0 end-0 bg-secondary text-center p-2">
                  <h5 class="card-title mb-1">專業通識</h5>
                  <p class="card-text">5 門課程</p>
                </div>
              </div>
            </RouterLink>
          </div>
          <div class="col-lg-6" data-aos="fade-up">
            <RouterLink to="course/category/lathe">
              <div class="card bg-dark text-white overflow-hidden">
                <img src="public/img/index-skills-3.jpg" class="card-img" alt="...">
                <div class="position-absolute bottom-0 end-0 bg-secondary text-center p-2">
                  <h5 class="card-title mb-1">證照考試</h5>
                  <p class="card-text">5 門課程</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" data-aos="fade-up" style="min-height: 350px;">
        <RouterLink to="course/category/lathe">
          <div class="card bg-dark text-white position-relative h-100 overflow-hidden">
            <img src="../../../public/img/index-skills-4.jpg"
             class="card-img position-absolute w-100 h-100"
             style="object-fit: cover;" alt="...">
            <div class="position-absolute bottom-0 end-0 bg-secondary text-center p-2">
              <h5 class="card-title mb-1">CNC 銑床</h5>
              <p class="card-text">7 門課程</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import 'bootstrap/js/dist/carousel';
</script>

<style lang="scss" scoped>
@import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
.carousel-inner img {
  min-height: 350px;
  object-fit: cover;
}
.section-title {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -95px;
    min-width: 75px;
    height: 3px;
    background: #fff;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -95px;
    width: 75px;
    height: 3px;
    background: #fff;
  }
}
.serve-section {
  .card {
    transition: all 0.4s;
    &:hover {
      background: var(--secondary);
      color: #fff !important;
      transform: translateY(-15px);
    }
  }
}
.skills-section {
  a {
    position: relative;
    &::after {
      content: '查看更多';
      position: absolute;
      font-size: 45px;
      white-space: nowrap;
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
    &:hover {
      opacity: 0.7;
      &::after {
        display: block;
      }
    }
    img {
      transition: all 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
