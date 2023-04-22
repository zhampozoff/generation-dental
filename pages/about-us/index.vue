<template>
  <v-container>
    <h3 class="display-2 text-center mb-4">
      About Us
    </h3>
    <p class="body-1 text-center mb-4">
      Curabitur egestas consequat lorem, vel fermentum augue porta id.
    </p>
    <div
      id="blog-list"
      class="blog-wrap"
    >
      <v-row justify="center">
        <v-col md="9" cols="12">
          <v-row>
            <v-col
              v-for="(item, index) in photoProtocolToolsMain"
              :key="index"
              md="4"
              cols="12"
              class="px-4"
            >
              <post-card
                :title="item.title"
                :desc="item.desc"
                :img="item.imgPath"
                href="/blog/detail-blog"
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
import PostCard from '~/components/Cards/PostCard'
import { photoProtocolToolsMain } from '~/static/content/photo-protocol-tools'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      photoProtocolToolsMain: photoProtocolToolsMain,
      blogData: [
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.'
        },
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.'
        },
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.'
        }
      ]
    }
  }
}
</script>
