<template lang="pug">
  b-card(:title='cardForm.universidade' :sub-title='cardForm.grau')
    b-card-text.text-muted.mb-2 {{cardForm.periodo}}
</template>

<script>
export default {
  name: 'CardFormacao',
  props: {
    cardForm: {
      type: [Object, Array],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 2rem 0;
  background-color: #f3f4f6;
  padding: 0;
  border: none;

  .card-body {
    padding: 0;
  }

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
}
</style>
