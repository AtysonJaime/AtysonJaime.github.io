<template lang="pug">
  section#about
    .content-about.p-3
      h1.title-about Atyson Jaime
      h3.subtitle-about Desenvolvedor Front
      p.content-about Desenvolvedor brasileiro e aficionado por tecnologias reais ou virtuais. Iniciei minha trajetória no ano de 2017 e a partir dai minha paixão pela criação e desenvolvimento front-end só cresceram. Em todos esses anos, passei por diversos tipos de tecnologia, mas foi utilizando Vue.js que acabei me aperfeiçoando. Amo estudar e estar antenado a novas tecnologias e desenvolver novas aplicações, podendo produzir e proporcionar soluções interessantes para todos os tipos de usuários, qualquer que sejam suas necessidades.
      .socialmidia-about
        b-link.link(v-for="item in social" :key="item.icon" :href="item.link" target="_blank" rel="noopener" role='link' :alt='item.title' :title='item.title')
          b-avatar(:icon='item.icon' size='3em')
</template>

<script>
export default {
  name: 'SectionSobreMim',

  data() {
    return {
      social: [
        {
          link: 'https://github.com/AtysonJaime',
          icon: 'github',
          title: 'Ir para página do Github',
        },
        {
          link: 'https://www.linkedin.com/in/atyson-jaime-91783a148/',
          icon: 'linkedin',
          title: 'Ir para página do Linkedin',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';
#about {
  display: flex;

  .content-about {
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title-about {
      font-size: calc(94 * 0.06rem);
      font-weight: 800;
      letter-spacing: 0.05rem;

      @include media('<1200px') {
        font-size: calc(80 * 0.06rem);
      }
      @include media('<841px') {
        font-size: calc(60 * 0.06rem);
      }
      @include media('<769px') {
        padding-top: 56px !important;
      }
    }
    .subtitle-about {
      font-size: calc(24 * 0.06rem);
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.05rem;
      padding: 3rem 0;

      @include media('<1050px') {
        padding: 1.5rem 0;
      }
    }
    .content-about {
      font-size: calc(18 * 0.06rem);
      text-align: justify;
      letter-spacing: 0.05rem;
      padding: 1rem 0;

      @include media('<841px') {
        font-size: calc(17 * 0.06rem);
        padding: 0.5rem 0;
      }
    }
    .socialmidia-about {
      display: flex;

      .link {
        padding: 1rem;
        .b-avatar {
          background-color: transparent;
          border: 2px solid $white;
        }

        &:hover,
        &:focus {
          .b-avatar {
            background-color: #dee2e6b3;
          }
        }
      }
    }
  }
}
</style>
