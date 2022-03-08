<template>
  <main id="main">
    <the-header/>
    <slot />
  </main>
</template>

<script>
import TheHeader from '@/components/Header';

export default {
  name: 'the-main',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
