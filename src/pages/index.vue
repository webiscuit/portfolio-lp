<template lang="pug">
  .flex.flex-col.w-full.h-screen.items-center.justify-center.text-center.tracking-wider.opacity-75
    p.m-5.text-2xl.font-bold.font-display </> webiscuit
    p Front-end Developer
    h1.text-4xl Hiromi Kozai
    ul.flex.justify-center.text-xl
      li.m-3: a(href="https://twitter.com/hiromir13" target="_blank")
        i.fab.fa-twitter
      li.m-3: a(href="https://codepen.io/hiromir13/" target="_blank")
        i.fab.fa-codepen
      li.m-3: a(href="https://www.facebook.com/hiromir13" target="_blank")
        i.fab.fa-facebook-square
      li.m-3: a(href="https://qiita.com/hiromir13" target="_blank")
        i.fas.fa-pencil-alt
      li.m-3: a(href="mailto:info@webiscuit.jp")
        i.fas.fa-envelope-open
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scope>
</style>
