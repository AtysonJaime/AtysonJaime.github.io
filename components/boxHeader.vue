<template>
  <nav class="navbar" role="navigation" aria-label="navegação principal">
    <div class="navbar-brand">
      <a class="logo-content navbar-item" href="/" title="Ir para o portfolio de Atyson Jaime" aria-label="Ir para o portfolio de Atyson Jaime">
        <img src="../public/logo_favicon.svg" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-ends">
        <div class="navbar-item toggle-language checkbox">
          <input type="checkbox" id="toggle-language">
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header",
  })
</script>

<style lang="scss" scope>
  .navbar {
    height: 4.375rem;
    background-color: #1f5c48;
    border-bottom: .125rem solid var(--light-dark);

    .logo-content {
      padding: .625rem;
      height: 4.375rem;
      width: 4.375rem;

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
      gap: .625rem;
    }
  }
</style>