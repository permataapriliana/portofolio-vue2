<template>
  <the-main>
    <router-view/>
  </the-main>
</template>

<script>
import TheMain from '@/layouts/main';

export default {
  name: 'the-app',
  components: {
    TheMain,
  },
};
</script>
