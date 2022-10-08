<template lang="pug">
  section#experiencias.p-3
    h2.titleSection Experiências
    CardJobs(v-for="job in experiencias" :key="job.id" :cardJob='job')
    hr.mt-2.mb-3
</template>

<script>
import CardJobs from '../generics/CardJobs.vue'

export default {
  name: 'SectionExperienciasJobs',
  components: {
    CardJobs,
  },

  data() {
    return {
      experiencias: [
        {
          id: '00',
          cargo: 'Desenvolvedor Front-End - Prestador de serviço',
          empresa: 'Superintendência de TI | UFRN',
          tempo: 'Desde Setembro de 2022',
          funcoes: [
            {
              id: '00 - STI',
              info: '> Realizar manutenções, construções e otimizações das interfaces de sites, portais e sistemas gerenciados pela STI.',
            },
            {
              id: '01 - STI',
              info: '> Organizar e otimizar metas e entregas utilizando metodologia ágil scrum dos portais e sites repassados para desenvolvimento',
            },
            {
              id: '02 - STI',
              info: '> Realizar palestras sobre tecnologias aos demais membros denominados tech talk;',
            },
            {
              id: '03 - STI',
              info: '> Ajudar os demais membros e outras equipes com dificuldades relacionadas às tecnologias usadas pela equipe de front, como também, sobre os componentes construídos pela equipe;',
            },
          ],
        },
        {
          id: '01',
          cargo: 'Desenvolvedor Front-End - Bolsista',
          empresa: 'Superintendência de TI | UFRN',
          tempo: 'Setembro de 2019 - Setembro de 2022',
          funcoes: [
            {
              id: '00 - STI - B',
              info: '> Realizar manutenções, construções e otimizações das interfaces de sites, portais e sistemas gerenciados pela STI.',
            },
            {
              id: '01 - STI - B',
              info: '> Acompanhamento da equipe Nuxt.Js com reuniões semanais para repasse aos lideres',
            },
            {
              id: '02 - STI - B',
              info: '> Realizar palestras sobre tecnologias aos demais membros denominados tech talk;',
            },
            {
              id: '03 - STI - B',
              info: '> Ajudar os demais membros e outras equipes com dificuldades relacionadas às tecnologias usadas pela equipe de front, como também, sobre os componentes construídos pela equipe;',
            },
          ],
        },
        {
          id: '02',
          cargo: 'Desenvolvedor Front-End - Prestador de serviço',
          empresa: 'UP3',
          tempo: 'Fevereiro de 2022 - Junho de 2022',
          funcoes: [
            {
              id: '00 - UP3',
              info: '> Construção de layout e manutenção para um sistema web',
            },
          ],
        },
        {
          id: '03',
          cargo: 'Desenvolvedor Front-End - Gerente de Projetos',
          empresa: 'EJECT | UFRN',
          tempo: 'Dezembro de 2018 - Março de 2019',
          funcoes: [
            {
              id: '00 - EJECT',
              info: '> Realizar manutenções, construções e otimizações das interfaces de sites e sistemas gerenciados pela EJECT.',
            },
            {
              id: '01 - EJECT',
              info: '> Organizar e otimizar metas e entregas utilizando metodologia ágil scrum dos sites e sistemas para as equipes',
            },
            {
              id: '02 - EJECT',
              info: '> Acompanhamento das equipe com reuniões semanais para repasse aos lideres',
            },
            {
              id: '03 - EJECT',
              info: '> Participação em entrevistas com clientes para levantamento de requisitos para o desenvolvimento dos sistemas e sites;',
            },
            {
              id: '04 - EJECT',
              info: '> Ajudar os demais membros e outras equipes com dificuldades relacionadas às tecnologias usadas pela equipe de front, como também, sobre os componentes construídos pela equipe;',
            },
          ],
        },
        {
          id: '04',
          cargo: 'Desenvolvedor Front-End - Assessor de Projetos',
          empresa: 'EJECT | UFRN',
          tempo: 'Maio de 2017 - Dezembro de 2018',
          funcoes: [
            {
              id: '00 - EJECT - A',
              info: '> Realizar manutenções, construções e otimizações das interfaces de sites e sistemas gerenciados pela EJECT.',
            },
            {
              id: '02 - EJECT - A',
              info: '> Organizar e otimizar metas e entregas utilizando metodologia ágil scrum dos sites e sistemas',
            },
            {
              id: '03 - EJECT - A',
              info: '> Participação em entrevistas com clientes para levantamento de requisitos para o desenvolvimento dos sistemas e sites;',
            },
            {
              id: '04 - EJECT - A',
              info: '> Ajudar os demais membros e outras equipes com dificuldades relacionadas às tecnologias usadas pela equipe de front, como também, sobre os componentes construídos pela equipe;',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#experiencias {
  background-color: #f3f4f6;
}
</style>
