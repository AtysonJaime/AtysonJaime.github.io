<template lang="pug">
<!-- Navbar para mobile -->
b-navbar(toggleable="lg" type="dark" fixed='top' v-if='isMobile')
  b-navbar-brand(href='#' role='link') Atyson Jaime
  b-navbar-toggle(target='nav-collapse')
  b-collapse#nav-collapse(is-nav)
    b-nav(vertical role="navigation" aria-label="Menu lateral da página pessoal do Atyson Jaime")
      b-nav-item(v-for="item in itensMenu" :key="item.id" :href='item.id' :alt='item.alt' role='link' @click='goToSection($event)') {{item.name}}

<!-- Aside para Desktop -->
aside.d-flex.flex-column(aria-label='' v-else)
  #aside-photo.p-2
    b-avatar.border-photo(src="~/assets/img/perfil.jpg" size='10rem' lazy alt='Imagem do Atyson Jaime')
  #aside-nav
    b-nav(vertical role="navigation" aria-label="Menu lateral da página pessoal do Atyson Jaime")
      b-nav-item(v-for="item in itensMenu" :key="item.id" :href='item.id' :alt='item.alt' role='link' @click='goToSection($event)') {{item.name}}
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
        { id: '#about', name: 'SOBRE', alt: 'Ir para a seção Sobre Mim' },
        {
          id: '#experiencias',
          name: 'EXPERIÊNCIAS',
          alt: 'Ir para a seção Experiências',
        },
        { id: '#formacao', name: 'FORMAÇÃO', alt: 'Ir para a sessão Formação' },
        {
          id: '#habilidades',
          name: 'HABILIDADES',
          alt: 'Ir para a sessão Habilidades',
        },
        {
          id: '#portifolio',
          name: 'portfólio',
          alt: 'Ir para a sessão portfólio',
        },
      ],
    }
  },
  methods: {
    goToSection(e) {
      e.preventDefault()
      const id = e.target.getAttribute('href')
      const section = document.querySelector(`${id}`)
      if (section) {
        const to = section.offsetTop
        window.scroll({
          top: to,
          behavior: 'smooth',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
      scroll-behavior: smooth;
      cursor: pointer;

      &:hover,
      &:focus {
        color: rgba(255, 255, 255, 0.75) !important;
      }
    }
    &:hover,
    &:focus {
      .nav-link {
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
        cursor: pointer;

        &:hover,
        &:focus {
          color: rgba(255, 255, 255, 0.75) !important;
        }
      }
      &:hover,
      &:focus {
        .nav-link {
          color: rgba(255, 255, 255, 0.75) !important;
        }
      }
    }
  }
}
</style>
