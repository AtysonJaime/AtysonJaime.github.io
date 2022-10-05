<template lang="pug">
<!-- Navbar para mobile -->
b-navbar(toggleable="lg" type="dark" fixed='top' v-if='isMobile')
  b-navbar-brand(href='#') Atyson Jaime
  b-navbar-toggle(target='nav-collapse')
  b-collapse#nav-collapse(is-nav)
    b-nav(vertical)
      b-nav-item(v-for="item in itensMenu" :key="item.id" :to='item.id' exact exact-active-class="active") {{item.name}}

<!-- Aside para Desktop -->
aside.d-flex.flex-column(aria-label='' v-else)
  #aside-photo.p-2
    b-avatar.border-photo(src="~/assets/img/perfil.jpg" size='10rem' lazy)
  #aside-nav
    b-nav(vertical)
      b-nav-item(v-for="item in itensMenu" :key="item.id" :to='item.id' exact exact-active-class="active") {{item.name}}
</template>

<script>
export default {
  name: 'NavegaçãoLateral',
  components: {},
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      itensMenu: [
        { id: '#about', name: 'SOBRE' },
        { id: '#experiencias', name: 'EXPERIÊNCIAS' },
        { id: '#formacao', name: 'FORMAÇÃO' },
        { id: '#habilidades', name: 'HABILIDADES' },
        { id: '#portifolio', name: 'PORTIFÓLIO' },
      ],
    }
  },
}
</script>

<style lang="scss">
.navbar {
  background-color: #15283c;

  .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 0.75) !important;
    }
  }
  .nav-item {
    .nav-link {
      font-weight: 800;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);

      &:hover,
      &:focus {
        color: rgba(255, 255, 255, 0.75) !important;
      }
    }
  }
}
aside {
  height: 100vh;
  justify-content: center;
  align-items: center;

  #aside-photo {
    .border-photo {
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
      border-color: #214162;
    }
  }

  #aside-nav {
    .nav-item {
      display: flex;
      justify-content: center;

      .nav-link {
        font-weight: 800;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);

        &:hover,
        &:focus {
          color: rgba(255, 255, 255, 0.75) !important;
        }
      }
    }
  }
}
</style>
