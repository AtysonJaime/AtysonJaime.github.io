<template lang="pug">
  section#habilidades.p-3
    h2.titleSection.dark Habilidades
    .content-habilidades
      h4.subtitleSection > Tecnologias e Ferramentas
      .content-avatar
        AvatarIcon(v-for="avatar in habilidades.tecnologias" :key="avatar.id" :title='avatar.title' :src='avatar.src')
      h4.subtitleSection > Integração Front com Back
      .content-avatar
        AvatarIcon(v-for="avatar in habilidades.integracoes" :key="avatar.id" :title='avatar.title' :src='avatar.src')
      h4.subtitleSection > Workflow
      ul.list-group
        li.list-group-item(v-for="item in habilidades.workflow" :key="item.id") {{item.info}}
</template>

<script>
import { mapState } from 'vuex'
import AvatarIcon from '../generics/AvatarIcon.vue'
export default {
  name: 'SectionHabilidades',

  components: {
    AvatarIcon,
  },

  computed: {
    ...mapState('habilidades', ['habilidades']),
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';
#habilidades {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content-habilidades {
    display: flex;
    flex-direction: column;

    .subtitleSection {
      text-decoration: underline;
      font-size: 26px;
      margin: 1rem 0;
      font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-weight: 700;
      line-height: 1.2;
      color: $white;
    }

    .content-avatar {
      display: flex;
      flex-wrap: wrap;
      .b-avatar-img {
        background-color: red !important;
      }
    }

    .list-group {
      .list-group-item {
        color: $white;
        font-size: 18px;
        background-color: transparent;
        padding: 0.75rem 0;
        border-width: 0 0 0 0;
        border-color: $white;
        &:last-child {
          border-width: 0;
        }
      }
    }
  }
}
</style>
