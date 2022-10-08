<template lang="pug">
  section#formacao.p-3
    h2.titleSection Formações
    CardFormacao(v-for="item in formacao" :key="item.id" :cardForm='item')
</template>

<script>
import CardFormacao from '../generics/CardFormacao.vue'
export default {
  name: 'SectionFormacao',
  components: {
    CardFormacao,
  },
  data() {
    return {
      formacao: [
        {
          id: '00 - F',
          universidade:
            'Universidade Federal do Rio Grande Do Norte (UFRN) | Natal/RN',
          grau: 'Bacharel em Engenharia Mecatrônica',
          periodo: 'JUNHO DE 2019 - JULHO DE 2022',
        },
        {
          id: '01 - F',
          universidade: 'Instituto Metrópole Digital (IMD) | Natal/RN',
          curso: 'Técnico em Eletrônica',
          periodo: 'JANEIRO DE 2019 - FEVEREIRO DE 2021',
        },
        {
          id: '02 - F',
          universidade:
            'Universidade Federal do Rio Grande Do Norte (UFRN) | Natal/RN',
          grau: 'Bacharel Ciência e Tecnologia(ECT) com ênfase em Tecnologia Mecatrônica',
          periodo: 'JANEIRO DE 2016 - JUNHO DE 2019',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/main';
#formacao {
  background-color: #f3f4f6;
  height: 100vh;
  width: 100%;

  @include media('<800px') {
    height: auto;
  }
}
</style>
