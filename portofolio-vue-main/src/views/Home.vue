<template>
  <div class="home">
    <h3>List Projects</h3>
    <div id="projects">
      <div class="project" v-for="(project, index) in getProject" :key="index">
        <router-link :to="{ name: 'DetailProject', params: { id: project.id } }">
          <h4>{{project.name}}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
