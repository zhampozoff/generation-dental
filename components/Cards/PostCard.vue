<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="img"
        class="white--text"
        height="200px"
      />
    </div>
    <div class="properties">
      <strong class="use-text-tile2 text-truncate">
        <span>
          {{ title }}
        </span>
      </strong>
      <v-card-subtitle v-if="date">
        {{ date }}
      </v-card-subtitle>
      <v-card-text class="desc" v-if="desc">
        <span class="text--primary">
          <span>{{ desc }}</span>
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :small="orientation === 'landscape'"
          :href="href"
          :target="openInNewTab ? '_blank' : ''"
          rel="noreferrer"
          outlined
          class="action-btn"
          color="primary"
        >
          {{ buttonTitle }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './post-news-card';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String
    },
    desc: {
      type: String
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#'
    },
    buttonTitle: {
      type: String,
      default: ''
    },
    openInNewTab: {
      type: Boolean,
      default: false
    },
  }
}
</script>
