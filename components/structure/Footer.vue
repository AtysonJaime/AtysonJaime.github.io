<template lang="pug">
  footer.section-footer.p-6
    p.mb-2.mb-1 @2022, por Atyson Jaime.
    .socialmidia-about
      b-link.link(v-for="item in social" :key="item.icon" :href="item.link" target="_blank" rel="noopener" role='link' :alt='item.title' :title='item.title')
        b-avatar(:icon='item.icon' size='3em')

</template>

<script>
export default {
  name: 'FooterSection',

  data() {
    return {
      social: [
        {
          link: 'https://github.com/AtysonJaime',
          icon: 'github',
          title: 'Ir para página do Github',
        },
        {
          link: 'https://www.linkedin.com/in/atyson-jaime-91783a148/',
          icon: 'linkedin',
          title: 'Ir para página do Linkedin',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
footer {
  background-color: #15283c;
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  p {
    color: #fff;
  }

  .socialmidia-about {
    display: flex;

    .link {
      padding: 1rem;
      .b-avatar {
        background-color: transparent;
        border: 2px solid #fff;
      }

      &:hover,
      &:focus {
        .b-avatar {
          background-color: #dee2e6b3;
        }
      }
    }
  }
}
</style>
