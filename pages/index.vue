<template lang="pug">
  #main-layout
    ParticlesComponent
    #inside
      #sidebar
        NavLateral(:isMobile='isMobile')
      #content.container-fluid.p-0
        About
        ExperienciasJobs
        Formacoes
        Habilidades
        Portfolio
</template>

<script>
import NavLateral from '../components/structure/NavLateral.vue'
import ParticlesComponent from '../components/generics/Particulas.vue'
import About from '../components/structure/About.vue'
import ExperienciasJobs from '../components/structure/Experiencias.vue'
import Formacoes from '../components/structure/Formacao.vue'
import Habilidades from '../components/structure/Habilidades.vue'
import Portfolio from '../components/structure/Portfolio.vue'

export default {
  name: 'IndexPage',
  components: {
    NavLateral,
    About,
    ParticlesComponent,
    ExperienciasJobs,
    Formacoes,
    Habilidades,
    Portfolio,
  },
  data() {
    return {
      isMobile: false,
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/main';

#main-layout {
  background-color: $black;

  section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: auto;
  }

  .light-gray {
    background-color: $light-gray !important;
  }

  .titleSection {
    text-decoration: underline;
    font-size: calc(50 * 0.06rem);
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-weight: 700;
    line-height: 1.2;

    &.dark {
      color: $white;
    }
  }

  #inside {
    z-index: 1 !important;
    display: flex;
    flex-direction: row;
  }

  #sidebar {
    @include media('>=768px') {
      width: 17rem;
      position: fixed;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
      background-color: $dark-blue;
      height: 100vh;
    }
  }

  #content {
    @include media('>=768px') {
      padding-left: 17rem !important;
    }
  }
}
</style>
