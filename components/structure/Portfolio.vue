<template lang="pug">
  section#portfolio.p-3.light-gray
    h2.titleSection Portfólio
    .portfolio-content.gallary
      CardModal(v-for="projeto in projetos" :key="projeto.id" :name='projeto.name' :id='projeto.id' :src='projeto.src' :modal='projeto.modal')
</template>

<script>
import CardModal from '../generics/CardModal.vue'
export default {
  name: 'SectionPortfolio',
  components: {
    CardModal,
  },
  data() {
    return {
      projetos: [
        {
          id: '00P',
          name: 'Weeky Organizer',
          src: require('~/assets/img/weekorganizer/capa.png'),
          modal: {
            subtitle: 'Pessoal',
            descricao:
              'O projeto visa disponibilizar um meio de guardar suas atividades ao longo da semana, dividido em 4 áreas: Projetos, Reuniões, Ajudas e Dificuldades.',
            tecnologias: 'Vue.Js, Bootstrap, Bulma, Css, Html, JS',
            link: 'https://atysonjaime.github.io/week-organizer/',
            linkTelas: '',
            ahLinkTelas: false,
            ahLink: true,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '01P',
          name: 'FavTube',
          src: require('~/assets/img/favTube/capa.png'),
          modal: {
            subtitle: 'Pessoal',
            descricao:
              '🚀 Construção de uma replica do youtube utilizando React e Next desenvolvido na Imersão React 2022 proporcionado pela Alura.',
            tecnologias: 'React.Js, Next.js, Html, Css, Js, Supabase, Vercel',
            link: 'https://aluratube-atysonjaime.vercel.app',
            linkTelas: '',
            ahLinkTelas: false,
            ahLink: true,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '02P',
          name: 'ENADE',
          src: require('~/assets/img/enade/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Site institucional para o ENADE - Exame Nacional de Desempenho dos Estudantes, utilizando o consumo do GESTORE para as informações presentes no site.',
            tecnologias: 'Nuxt.js, Pug.js, Sass, Gestore',
            link: 'https://enade.ufrn.br',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '03P',
          name: 'SIA',
          src: require('~/assets/img/sia/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Site institucional para o SIA - Secretaria de Inclusão e acessibilidade, utilizando o consumo do GESTORE para as informações presentes no site, como também, o site foi desenvolvido com todas as acessibilidades necessárias para qualquer usuário poder utilizar e navegar pelo mesmo.',
            tecnologias: 'Nuxt.js, Pug.js, Sass, Gestore',
            link: 'https://sia.ufrn.br',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '04P',
          name: 'SISU',
          src: require('~/assets/img/sisu/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Site institucional para o SISU - Sistema de Seleção Unificada, utilizando o consumo do GESTORE para as informações presentes no site.',
            tecnologias: 'Nuxt.js, Pug.js, Sass, Gestore',
            link: 'https://sisu.ufrn.br',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '05P',
          name: 'SISBI',
          src: require('~/assets/img/sisbi/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Portal do Sistema de Bibliotecas (SISBI) da Universidade Federal do Rio Grande do Norte (UFRN), utilizando o consumo do GESTORE e da API da UFRN para as informações presentes no site.',
            tecnologias: 'Nuxt.js, Pug.js, Sass, Gestore, API da UFRN',
            link: 'https://sisbi.ufrn.br/',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '06P',
          name: 'GESTORE',
          src: require('~/assets/img/gestore/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Sistema de gerenciamento para os sites institucionais da UFRN. Desenvolvi toda a parte do front como também a documentação de como usar o thymeleaf dentro do projeto.',
            tecnologias: 'Thymeleaf, Pug.js, Js, Sass',
            link: 'https://gestore.ufrn.br',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: true,
            photos: [
              {
                id: '00PG',
                src: require('~/assets/img/gestore/capa.png'),
              },
              {
                id: '01PG',
                src: require('~/assets/img/gestore/GESTORE ACESSIBILIDADE.png'),
              },
              {
                id: '02PG',
                src: require('~/assets/img/gestore/Gestore Formularios.png'),
              },
              {
                id: '03PG',
                src: require('~/assets/img/gestore/Gestore INICIO.png'),
              },
              {
                id: '04PG',
                src: require('~/assets/img/gestore/Gestore LISTAGEM.png'),
              },
            ],
          },
        },
        {
          id: '07P',
          name: 'Design System da UFRN',
          src: require('~/assets/img/ds/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Design System de componentes usados nos sistemas da UFRN. Usa-se no Gestore, por exemplo.',
            tecnologias: 'Thymeleaf, Pug.js, Js, Sass',
            link: '',
            linkTelas:
              'https://drive.google.com/drive/folders/1dA81f34YzIIRSHwwVCrnDq60ZhEQzyvB?usp=sharing',
            ahLinkTelas: true,
            ahLink: false,
            ahCarrosel: true,
            photos: [
              {
                id: '00PP',
                src: require('~/assets/img/ds/capa.png'),
              },
              {
                id: '01PP',
                src: require('~/assets/img/ds/Auto contraste.png'),
              },
              {
                id: '02PP',
                src: require('~/assets/img/ds/Templates.png'),
              },
            ],
          },
        },
        {
          id: '08P',
          name: 'Docentes',
          src: require('~/assets/img/docentes/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Sistemas para encontrar informações a respeito dos docentes em atuação da UFRN, com consumo da API da UFRN.',
            tecnologias: 'Nuxt.Js, API UFRN, Pug.js, Sass',
            link: 'https://docente.ufrn.br',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '09P',
          name: 'Pós-Graduação',
          src: require('~/assets/img/pg/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Sistemas para encontrar informações a respeito dos programas de Pós-Graduação da UFRN, com consumo da API da UFRN.',
            link: 'https://posgraduacao.ufrn.br',
            tecnologias: 'Nuxt.Js, API UFRN, Pug.js, Sass',
            linkTelas: '',
            ahLink: true,
            ahLinkTelas: false,
            ahCarrosel: false,
            photos: [],
          },
        },
        {
          id: '10P',
          name: 'Outros projetos da STI',
          src: require('~/assets/img/sti/capa.png'),
          modal: {
            subtitle: 'STI | UFRN',
            descricao:
              'Manutenção em sites encontrados no domínio da UFRN, utilizando o consumo do GESTORE ou da própria API da UFRN.',
            tecnologias:
              'Nuxt.Js, Vue.Js, PHP, API UFRN, GESTORE, Pug.js, Sass, entre outros.',
            ahLink: false,
            ahLinkTelas: false,
            ahCarrosel: false,
            link: '',
          },
        },
        {
          id: '11P',
          name: 'CTS Receivership',
          src: require('~/assets/img/cts/capa.png'),
          modal: {
            subtitle: 'UP3',
            descricao:
              'Sistema para gerenciar os itens recuperados de um desabamento ocorrido em uma prédio localizando em Miami, Florida. O sistema foi construido todo em ingles',
            tecnologias: 'Html, Sass, Js, Laravel',
            ahLink: true,
            ahLinkTelas: true,
            link: 'https://cts.up3.com/login',
            linkTelas:
              'https://drive.google.com/drive/folders/1l49NUbMcDDZMGf4U3Bu1JP-biFcs3e5r?usp=sharing',
            ahCarrosel: true,
            photos: [
              {
                id: '00PU',
                src: require('~/assets/img/cts/capa.png'),
              },
              {
                id: '01PU',
                src: require('~/assets/img/cts/Page 1.png'),
              },
              {
                id: '02PU',
                src: require('~/assets/img/cts/Page 2.png'),
              },
              {
                id: '03PU',
                src: require('~/assets/img/cts/Perfil admin.png'),
              },
              {
                id: '04PU',
                src: require('~/assets/img/cts/Perfil user.png'),
              },
              {
                id: '05PU',
                src: require('~/assets/img/cts/zoom img.png'),
              },
            ],
          },
        },
      ],
    }
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
