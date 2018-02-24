<template>
  <footer>
    <small>© <a href="https://twitter.com/jimmerioles" target="_blank" rel="noopener">Jim Merioles</a> - Forked by <a href="https://www.zahidmahmood.co.uk">Zahid Mahmood</a></small>
  </footer>
</template>

<script>
export default {
  name: 'AppCredits',

  props: {
    year: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  position: absolute;
  bottom: 10px;
  visibility: hidden;
}

@media screen and (min-width: 450px) {
  footer {
    visibility: visible;
  }
}
</style>
