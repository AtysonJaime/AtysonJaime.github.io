<template>
  <div class="portfolio-content">
    <Head>
      <Title>{{ $t("head.title") }}</Title>
      <Meta name="description" :content="$t('head.description')" />
      <Meta name="og:title" :content="$t('head.title')" />
      <Meta name="og:description" :content="$t('head.description')" />
      <Meta name="og:site_name" :content="$t('head.title')" />
      <Meta name="og:image" content="/logo.svg" />
    </Head>

    <aside v-if="!isMobile" class="aside-content">
      <BoxHeader />
      <div class="img-menu-content">
        <div class="img-perfil-ai">
          <img src="/perfil-ia.jpg" :alt="$t('perfilAiAlt')" />
        </div>
        <ListMenu />
      </div>
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
import ListMenu from "./components/listMenu.vue";

export default defineComponent({
  name: "PortfolioApp",

  components: {
    BoxHeader,
    ListMenu,
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

    .img-menu-content {
      height: calc(100dvh - 5.375rem);
      overflow: auto;
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    .img-perfil-ai {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: cover;
        border: 0.25rem solid var(--dark);
        border-radius: 50%;
        width: 12.5rem;
        height: 12.5rem;
      }
    }
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
