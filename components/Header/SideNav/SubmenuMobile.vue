<template>
  <fragment>
    <v-list-group
      v-if="menuItems.child"
      sub-group
      no-action
      class="side-group"
    >
      <template #activator>
        <v-list-item class="has-grand-child">
          <v-list-item-title class="menu-list">
            {{ menuItems.name }}
          </v-list-item-title>
        </v-list-item>
      </template>
      <submenu-mobile
        v-for="(subitem, index) in menuItems.child"
        :key="index"
        :menu-items="subitem"
      />
    </v-list-group>
    <!-- Single Nav -->
    <v-list-item
      v-else
      @click="handleClick(menuItems)"
      :class="{ current: curURL === (curOrigin+langPath+menuItems.link)}"
      class="side-group-link"
    >
      <v-list-item-title class="menu-list">
        {{ menuItems.name }}
      </v-list-item-title>
    </v-list-item>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
export default {
  name: 'SubmenuMobile',
  data() {
    return {
      showMenu: false,
      curURL: '',
      curOrigin: '',
      langPath: ''
    }
  },
  props: {
    menuItems: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  methods: {
    handleClick(item) {
      this.$router.push(item.link)
    }
  }
}
</script>
