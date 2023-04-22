<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>
        <div
          id="feature"
          class="space-top space-bottom"
        >
          <v-container>
            <feature />
          </v-container>
        </div>
        <div
          class="page-section"
        >
          <counter dark />
        </div>
        <div
          id="testimonials"
          class="space-top"
        >
          <Testimonials />
        </div>
        <div
          id="pricing"
          class="space-top"
        >
          <pricing />
        </div>
        <div
          id="blog"
          class="space-top space-bottom"
        >
          <blog />
        </div>
        <div id="subscribe">
          <subscribe />
        </div>
      </div>
      <main-footer />
      <hidden point="smDown">
        <corner />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Hidden from '~/components/Hidden'
import BannerSlider from '~/components/BannerSlider'
import Feature from '~/components/Feature'
import Counter from '~/components/Counter'
import Testimonials from '~/components/Testimonials'
import Pricing from '~/components/Pricing'
import Blog from '~/components/Blog'
import Subscribe from '~/components/Subscribe'
import Footer from '~/components/Footer'
import Corner from '~/components/Corner'
import Notification from '~/components/Notification'
import PhotoEquipment from '~/pages/photo-equipment'
import Camera from '~/pages/photo-equipment/camera'
import Lenses from '~/pages/photo-equipment/lenses'
import Flashes from '~/pages/photo-equipment/flashes'
import Sets from '~/pages/photo-equipment/sets'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    Hidden,
    Feature,
    Counter,
    Testimonials,
    Pricing,
    Blog,
    Subscribe,
    Corner,
    Notification,
    PhotoEquipment,
    Camera,
    Lenses,
    Flashes,
    Sets,
    'main-footer': Footer
  },
  head() {
    return {
      title: 'Generation dent'
    }
  }
}
</script>
