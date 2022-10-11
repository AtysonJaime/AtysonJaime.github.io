<template lang="pug">
  a(:href="href" class="card-link" target="_blank" rel="noopener" role='link' :alt='content + " " + title' :title='content + " " + title')
    | {{content}}
    b-icon.ml-2(icon='box-arrow-up-right')
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a:hover,
a:focus {
  text-decoration: underline;
}
</style>
