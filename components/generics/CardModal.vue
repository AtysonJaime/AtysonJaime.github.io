<template lang="pug">
  .content-card-modal
    .card.mt-4.shadow.card-gallary(
      no-body
      style="max-width: 30rem;"
      role='button'
      tabindex='0'
      :title='"Abrir modal sobre projeto " + name'
      @click='showModal(id)'
      @keypress.enter='showModal(id)'
    )
      .black-div
      b-card-body
        b-card-title {{name}}
      b-img(:src="src" fluid :alt="'Image capa do projeto '+name" class="card-img-top")

    <!-- MODAL -->
    b-modal(:ref='id' :title='name' centered)
      template(#modal-header style="display: none;").border-0
        .modal-header-info
          h4.modal-title {{name}}
          p.text-muted.mt-1.mb-1 {{modal.subtitle}}
        button(type="button" aria-label="Close" class="close" @click='closeModal(id)' @keypress.enter='closeModal(id)')
          b-icon(icon='x-lg')
      h5.subtitleSectionModal > Descrição
      p.content-modal.mb-2.mt-2 {{modal.descricao}}
      hr
      h5.subtitleSectionModal > Tecnologias
      p.content-modal.mb-2.mt-2 {{modal.tecnologias}}
      hr
      .content-carrosel.mb-2.mt-2(v-show='modal.ahCarrosel')
        b-carousel(
          :id='id+"C"'
          :interval='4000'
          indicators
          background="#1b1b1b"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        )
          b-carousel-slide(v-for="photo in modal.photos" :key="photo.id" :img-src='photo.src')
      hr(v-show='modal.ahCarrosel && (modal.ahLink || modal.ahLinkTelas)')
      .button-content.d-flex.justify-content-end(v-show='modal.ahLink || modal.ahLinkTelas')
        LinkExterno.mr-1(v-show='modal.ahLinkTelas' :href='modal.linkTelas' :title='name' content='Visualizar telas do projeto')
        LinkExterno.mr-1(v-show='modal.ahLink' :href='modal.link' :title='name' content='Visitar página')


</template>

<script>
import LinkExterno from './LinkExterno.vue'
export default {
  components: {
    LinkExterno,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    modal: {
      type: [Array, Object],
      required: true,
    },
  },

  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },

  methods: {
    showModal(modal) {
      this.$refs[modal].show()
      setTimeout(() => {
        const { header } = this.$refs[modal].$refs
        const { footer } = this.$refs[modal].$refs
        const { dialog } = this.$refs[modal].$refs
        const { body } = this.$refs[modal].$refs
        header.setAttribute('style', 'border: none !important')
        footer.setAttribute('style', 'display: none !important')
        dialog.setAttribute('style', 'max-width: 800px !important;')
        const carrosel = body.querySelector('.content-carrosel')
        const carroselIndicators = carrosel.querySelector(
          '.carousel-indicators'
        )
        if (carroselIndicators) {
          carroselIndicators.querySelectorAll('li').forEach((item) => {
            item.setAttribute(
              'style',
              'background-color: #dc3545 !important;height: 6px !important'
            )
          })
        }
      }, 50)
    },
    closeModal(modal) {
      this.$refs[modal].hide()
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';
.card-gallary {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-right: 4rem;

  @include media('<1100px') {
    margin-right: 0;
  }

  img {
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  &:hover,
  &:focus {
    img {
      -moz-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    .black-div,
    .card-body {
      display: flex;
      -moz-transform: display;
      -webkit-transform: display;
      transform: display;
    }
  }

  .black-div {
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 10;
  }
  .card-body {
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    display: none;
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: $white;
    z-index: 10;
  }
}
.modal {
  h5,
  h4,
  p,
  a {
    font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-weight: 700;
    line-height: 1.2;
  }

  .modal-dialog {
    max-width: 800px;
  }

  .modal-content {
    .modal-header {
      h4 {
        font-size: 25px;
      }
      p {
        font-size: 18px;
      }
    }
    .modal-body {
      h5 {
        font-size: 22px;
        text-decoration: underline;
      }
      p {
        font-size: 18px;
      }
      hr {
        border-width: 2px;
      }
    }
  }
}
.content-carrosel .carousel-indicators li {
  background-color: #1b1b1b !important;
}
</style>
