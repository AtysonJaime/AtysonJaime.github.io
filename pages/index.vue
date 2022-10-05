<template lang="pug">
  #main-layout
    #inside
      #sidebar
        NavLateral(:isMobile='isMobile')
      #content.container-fluid.p-0
        Tutorial
</template>

<script>
import NavLateral from '../components/structure/NavLateral.vue'
export default {
  name: 'IndexPage',
  components: {
    NavLateral,
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
    @include media('<640px') {
      padding-top: 56px !important;
    }
  }
}
</style>
