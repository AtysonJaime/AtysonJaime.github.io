<template>
  <div class="portfolio-content">
    <div class="header-aside-content">
      <Header/>
    </div>
    <main class="main-content">
      <NuxtPage />
      <!-- Footer -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/boxHeader.vue";

export default defineComponent({
  name: "PortfolioApp",

  components: {
    Header,
  }
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

  .header-aside-content {
    background-color: var(--primary-dark);
    border-right: 0.0625rem solid var(--light-dark);
    display: flex;
    flex-direction: column;
  }

  .main-content {
    min-height: 100dvh;
    overflow: auto;
    background-color: var(--light-dark);
  }
}
</style>
