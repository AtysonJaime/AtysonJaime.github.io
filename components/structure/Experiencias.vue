<template lang="pug">
  section#experiencias.p-3.light-gray
    h2.titleSection Experiências
    CardJobs(v-for="job in experiencias" :key="job.id" :cardJob='job')
    hr.mt-2.mb-3
</template>

<script>
import { mapState } from 'vuex'
import CardJobs from '../generics/CardJobs.vue'

export default {
  name: 'SectionExperienciasJobs',
  components: {
    CardJobs,
  },

  computed: {
    ...mapState('experiencias', ['experiencias']),
  },
}
</script>
