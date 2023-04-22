<template>
  <v-app>
    <transition name="fade">
      <div
        id="main-wrap"
        :class="{'page-fade-transition-exit': !play}"
      >
        <v-main style="display: flex; flex-direction: column">
          <drop-list></drop-list>
          <div style="margin-top: 56px">
            <nuxt />
          </div>
        </v-main>
      </div>
    </transition>
  </v-app>
</template>

<script>
import DropList from '~/components/Header/DropList';
export default {
  components: {
    DropList
  },
  loading: false,
  data() {
    return {
      play: true
    }
  },
  mounted: function() {
    // Preloader and Progress bar setup
    this.$nextTick(() => {
      setTimeout(() => {
        this.$nuxt.$loading.finish()
        this.play = false
      }, 500)
      this.$nuxt.$loading.start()
    })
    const preloader = document.getElementById('preloader')
    if (preloader !== null || undefined) {
      preloader.remove()
    }
    // RTL initial
    const rtlURL = document.location.pathname.split('/')[1] === 'ar'
    this.$vuetify.rtl = rtlURL
  }
}
</script>
