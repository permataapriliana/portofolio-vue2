<template>
  <header>
    <h1>{{getSiteInfo.title}}</h1>
    <h2>{{getSiteInfo.description}}</h2>
    <the-nav/>
  </header>
</template>

<script>
import TheNav from '@/components/Nav';

export default {
  name: 'the-header',
  components: {
    TheNav,
  },
};
</script>
