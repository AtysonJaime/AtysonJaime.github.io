<template lang="pug">
  section#habilidades.p-3
    h2.titleSection.dark Habilidades
    .content-habilidades
      h4.subtitleSection > Tecnologias e Ferramentas
      .content-avatar
        AvatarIcon(v-for="avatar in tecnologias" :key="avatar.id" :title='avatar.title' :src='avatar.src')
      h4.subtitleSection > Integração Front com Back
      .content-avatar
        AvatarIcon(v-for="avatar in integracoes" :key="avatar.id" :title='avatar.title' :src='avatar.src')
      h4.subtitleSection > Workflow
      ul.list-group
        li.list-group-item(v-for="item in workflow" :key="item.id") {{item.info}}
</template>

<script>
import AvatarIcon from '../generics/AvatarIcon.vue'
export default {
  name: 'SectionHabilidades',

  components: {
    AvatarIcon,
  },

  data() {
    return {
      tecnologias: [
        {
          id: '00 - T',
          src: require('~/assets/img/icons-html-5.svg'),
          title: 'HTML5',
        },
        {
          id: '01 - T',
          src: require('~/assets/img/icons-css3.svg'),
          title: 'CSS3',
        },
        {
          id: '02 - T',
          src: require('~/assets/img/icons-javascript.svg'),
          title: 'Javascript',
        },
        {
          id: '03 - T',
          src: require('~/assets/img/icons-sass.svg'),
          title: 'Sass',
        },
        {
          id: '05 - T',
          src: require('~/assets/img/pugjs-icon.svg'),
          title: 'Pug.js',
        },
        {
          id: '06 - T',
          src: require('~/assets/img/icons-vue-js.svg'),
          title: 'Vue.JS',
        },
        {
          id: '07 - T',
          src: require('~/assets/img/nuxtjs-icon.svg'),
          title: 'Nuxt.Js',
        },
        {
          id: '08 - T',
          src: require('~/assets/img/icons-npm.svg'),
          title: 'npm',
        },
        {
          id: '09 - T',
          src: require('~/assets/img/icons-bootstrap.svg'),
          title: 'Framework Bootstrap',
        },
        {
          id: '10 - T',
          src: require('~/assets/img/icons-git.svg'),
          title: 'Git',
        },
        {
          id: '11 - T',
          src: require('~/assets/img/php-icon.svg'),
          title: 'PHP',
        },
      ],
      integracoes: [
        {
          id: '00 - I',
          src: require('~/assets/img/icons-thymeleaf.svg'),
          title: 'Thymeleaf',
        },
        {
          id: '01 - I',
          src: require('~/assets/img/laravel-icon.svg'),
          title: 'Laravel',
        },
      ],
      workflow: [
        {
          id: '00 - W',
          info: '+ Mobile-First, Design responsivo, Acessibilidade',
        },
        {
          id: '01 - W',
          info: '+ Testing & Debugging: E2E e Javascript usando Cypress como framework',
        },
        { id: '02 - W', info: '+ Desenvolvimento Ágil e Scrum' },
        { id: '03 - W', info: '+ Ingles intermediário' },
      ],
    }
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
