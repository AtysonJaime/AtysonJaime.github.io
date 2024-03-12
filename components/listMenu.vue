<template>
  <ul class="list-menu" :aria-label="$t('menu.ariaLabel')">
    <li
      v-for="(item, index) in menuList"
      :key="item.name"
      class="list-menu-item"
    >
      <a
        :class="'list-menu-link' + (index === activeMenu ? ' active' : '')"
        :href="item.href"
        :title="item.title"
        :aria-label="item.title"
        @click="activeMenu = index"
      >
        <span class="icon">
          <i :class="item.icon"></i>
        </span>
        <h5>
          {{ item.name }}
        </h5>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMenuStore } from "~/stores/menu";

export default defineComponent({
  name: "ListMenu",

  setup() {
    const menu = useMenuStore();
    const menuList = computed(() => menu.itens);
    return {
      menuList,
    };
  },
  data() {
    return {
      activeMenu: 0,
    };
  },
});
</script>

<style lang="scss" scope>
.list-menu {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 0.5rem;

  .list-menu-item {
    width: 100%;
    height: 3rem;
  }

  .list-menu-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;
    color: var(--light-dark);
    transition: all 0.5s;
    opacity: 0.3;

    span.icon {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      background-color: var(--dark);
      position: absolute;
      left: -1.5rem;
      padding-right: 0.3125rem;

      i {
        color: var(--dark-light);
      }
    }

    h5 {
      margin-left: 2.1875rem;
      color: var(--dark-light);
    }

    &:hover,
    &.active,
    &:focus {
      opacity: 1;
    }
  }
}
</style>
