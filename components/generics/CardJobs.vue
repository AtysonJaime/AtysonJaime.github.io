<template lang="pug">
  b-card.shadow(:title='cardJob.cargo' :sub-title='cardJob.empresa')
    b-card-text.text-muted.mb-2 {{cardJob.tempo}}
    ul.list-group
      li.list-group-item(v-for="item in cardJob.funcoes" :key="item.id") {{item.info}}
</template>

<script>
export default {
  name: 'CardExperiencia',
  props: {
    cardJob: {
      type: [Object, Array],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;

  .card-title {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
    color: #343a40;
  }

  .card-subtitle {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  }

  .list-group {
    .list-group-item {
      padding: 0.75rem 0;
      border-width: 0 0 2px 0;
      &:last-child {
        border-width: 0;
      }
    }
  }
}
</style>
