<template>
  <nav class="navbar" role="navigation" aria-label="cabeçalho da página">
    <div class="navbar-brand">
      <a
        class="logo-content navbar-item"
        href="/"
        :title="$t('header.title')"
        :aria-label="$t('header.title')"
      >
        <img src="/logo.svg" :alt="$t('header.alt')" />
      </a>
      <div class="navbar-ends">
        <ToggleLanguage />
        <!-- TODO: Criar componente de dropdown sessões -->
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToggleLanguage from "./toggleLanguage.vue";

export default defineComponent({
  name: "BoxHeader",

  components: {
    ToggleLanguage,
  },
});
</script>

<style lang="scss" scope>
.navbar {
  height: 5.375rem;
  background-color: #1f5c48;
  border-bottom: 0.125rem solid var(--light-dark);

  .logo-content {
    padding: 0.3125rem;
    height: 5.375rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      max-height: 100%;
    }
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navbar-ends {
    display: flex;
    gap: 0.625rem;
  }
}
</style>
