<template>
  <div id="detail">
    <h1>{{projectById.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'DetailProject',
  computed: {
    projectById() {
      return this.getProject.find((project) => project.id === this.$route.params.id);
    },
  },
};
</script>
