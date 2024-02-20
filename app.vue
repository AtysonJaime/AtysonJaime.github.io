<template>
  <div class="portfolio-content">
    <aside v-if="!isMobile" class="aside-content">
      <BoxHeader />
    </aside>
    <main class="main-content">
      <BoxHeader v-if="isMobile" />
      <NuxtPage />
      <!-- Footer -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoxHeader from "./components/boxHeader.vue";

export default defineComponent({
  name: "PortfolioApp",

  components: {
    BoxHeader,
  },

  data() {
    return {
      isMobile: false,
    };
  },

  beforeMount() {
    this.windowResizeIs992();
    window.addEventListener("resize", this.windowResizeIs992);
  },

  methods: {
    /**
     * Sets the isMobile property based on the window width
     */
    windowResizeIs992() {
      console.log("Entrei aqui");
      if (window.innerWidth < 992) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
});
</script>
<style lang="scss">
@import "../assets/scss/typography.scss";

:root {
  --primary: #00dc82;
  --primary-dark: #008f54;
  --dark: #343a40;
  --gray: #6c757d;
  --light: #f9fefe;
  --light-dark: #f3f4f6;
}

.portfolio-content {
  display: grid;
  grid-template-columns: 16rem auto;

  .aside-content {
    background-color: var(--primary-dark);
    border-right: 0.0625rem solid var(--light-dark);
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }

  .main-content {
    min-height: 100dvh;
    overflow: auto;
    background-color: var(--light-dark);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}
</style>
