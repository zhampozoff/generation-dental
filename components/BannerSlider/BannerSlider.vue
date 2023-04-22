<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" v-for="(config, index) in carouselConfig" :key="index">
            <div class="img">
              <img :src="config.imagePath" alt="illustration" />
            </div>
        </div>
      </slick>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './slider-styles';
</style>

<script>
import { carouselConfig } from '~/config/carousel-config'

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      carouselConfig: carouselConfig,
      slickOptions: {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  }
}
</script>
