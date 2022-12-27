<template lang="pug">
  section#portfolio.p-3.light-gray
    h2.titleSection Portfólio
    .portfolio-content.gallary
      CardModal(v-for="projeto in projetos.pessoais" :key='projeto.id' :name='projeto.name' :id='projeto.id' :src='projeto.src' :modal='projeto.modal')
      CardModal(v-for="projeto in projetos.profissionais" :key="projeto.id" :name='projeto.name' :id='projeto.id' :src='projeto.src' :modal='projeto.modal')
</template>

<script>
import { mapState } from 'vuex'
import CardModal from '../generics/CardModal.vue'
export default {
  name: 'SectionPortfolio',
  components: {
    CardModal,
  },
  computed: {
    ...mapState('portfolio', ['projetos']),
  },
}
</script>

<style lang="scss" scoped>
#portfolio {
  .portfolio-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
