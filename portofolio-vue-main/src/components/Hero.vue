<template>
  <div>
    <div class="content"
      v-for="(project, index) in projects"
      :key="index"
    ></div>
  </div>
</template>
