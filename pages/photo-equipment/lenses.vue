<template>
  <v-container>
    <h3 class="display-2 text-center mb-4">
      Камеры
    </h3>
    <div
      id="blog-list"
      class="blog-wrap"
    >
      <v-row justify="center">
        <v-col md="9" cols="12">
          <v-row>
            <v-col
              v-for="(item, index) in lenses"
              :key="index"
              md="4"
              cols="12"
              class="px-4"
            >
              <post-card
                :title="item.title"
                :desc="item.desc"
                :img="item.imgPath"
                open-in-new-tab
                :button-title="writeToWhatsappName"
                :href="buildWhatsappMessageLink(item)"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import '/components/Blog/blog-style';
</style>

<script>
import { buildDetailsOfProductMessageHref, writeToWhatsappName } from '~/config/whatsappConfig'
import PostCard from '~/components/Cards/PostCard'
import { lenses } from '~/static/content/photo-equipment'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      lenses: lenses,
      writeToWhatsappName: writeToWhatsappName
    }
  },
  methods: {
    buildWhatsappMessageLink: buildDetailsOfProductMessageHref
  }
}
</script>
