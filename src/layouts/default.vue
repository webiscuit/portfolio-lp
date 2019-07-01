<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>


<style>
body {
  color: #fff;
  font-family: 'Open Sans', 'Noto Sans JP', sans-serif;
  background: no-repeat center center/800% 800% linear-gradient(130deg, #ffdde1, #ee9ca7, #a7bfe8, #6190e8);
  animation: grad 30s ease infinite;
}
a {
  transition: opacity .1s ease;
  &:hover {
    opacity: .5;
  }
}
@keyframes grad {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
</style>
