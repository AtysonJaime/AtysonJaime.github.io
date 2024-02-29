<template>
  <ul class="list-menu">
    <li class="list-menu-item">
      <a
        class="list-menu-link"
        :href="$t('menu.start.href')"
        :title="$t('menu.start.title')"
        :aria-label="$t('menu.start.title')"
      >
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        {{ $t("menu.start.name") }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListMenu",
});
</script>

<style lang="scss" scope>
.list-menu {
  display: flex;
  flex-direction: column;
  text-decoration: none;

  .list-menu-link {
    display: flex;
    gap: 2rem;
    font-size: 23px !important;
  }
}
</style>
