<template>
  <div>
<!--    <mixed v-if="type === 'mixed'" :home="home" />-->
<!--    <basic v-if="type === 'basic'" />-->
<!--    <drop-list />-->
<!--    <mega v-if="type === 'mega'" />-->
<!--    <hamburger v-if="type === 'hamburger'" />-->
<!--    <nav-scroll v-if="type === 'navscroll'" :home="home" />-->
<!--    <search-bar v-if="type === 'search'" />-->
    <router-view>
    </router-view>
  </div>
</template>

<script>
import DropList from './DropList'
// import Mixed from './Mixed'
// import Basic from './Basic'
// import Mega from './Mega'
// import Hamburger from './Hamburger'
// import NavScroll from './NavScroll'
// import SearchBar from './Search'

export default {
  components: {
    DropList
    // Mixed,
    // Basic,
    // Mega,
    // Hamburger,
    // NavScroll,
    // SearchBar
  },
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // type() {
    //   return this.$store.state.ui.header
    // }
  }
}
</script>
