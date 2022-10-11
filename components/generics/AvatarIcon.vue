<template lang="pug">
  span.b-avatar.mr-3.mb-1.mt-1.badge-secondary.rounded-circle(:title="title")
    span.b-avatar-img
      img(:src="src" :alt="'Icone '+title")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.b-avatar {
  background-color: #f3f4f6;
  width: 4.5rem;
  height: 4.5rem;

  > .b-avatar-img > img {
    width: 90% !important;
    height: 90% !important;
  }
}
</style>
