<template lang="pug">
  #main-layout
    ParticlesComponent
    #inside
      #sidebar
        NavLateral(:isMobile='isMobile')
      #content.container-fluid.p-0
        About
        ExperienciasJobs
</template>

<script>
import NavLateral from '../components/structure/NavLateral.vue'
import ParticlesComponent from '../components/generics/Particulas.vue'
import About from '../components/structure/About.vue'
import ExperienciasJobs from '../components/structure/Experiencias.vue'

export default {
  name: 'IndexPage',
  components: {
    NavLateral,
    About,
    ParticlesComponent,
    ExperienciasJobs,
  },
  data() {
    return {
      isMobile: false,
    }
  },
  mounted() {
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
