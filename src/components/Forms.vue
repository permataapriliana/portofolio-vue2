<template>
  <div>
    <p class="paragraph">Forms</p>
    <form @submit.prevent="submitForms()">
      <div class="form-input">
        <label for="name">Name</label>
        <br>
        <input id="name" placeholder="name" name="name" type="text" v-model="input.name">
      </div>
      <div class="form-input">
        <label for="email">Email</label>
        <br>
        <input id="email" placeholder="email@domain.com" type="email" v-model="input.email">
      </div>
      <div class="form-input">
        <label for="message">Message</label>
        <br>
        <textarea v-model="input.message" placeholder="message here..." id="" rows="10"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <hr>
    <ol>
      <li v-for="(item, idx) in forms" :key="idx">{{item.name}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  // format for named components 'the-name'
  name: 'the-form',
  data: () => ({
    input: {
      name: '',
      email: '',
      message: '',
    },
    forms: [],
  }),
  methods: {
    submitForms() {
      this.forms.push(this.input);
      this.input = {
        name: '',
        email: '',
        message: '',
      };
    },
  },
  // watch
  watch: {
    // with nested object
    'input.name': (newValue, oldValue) => {
      if (newValue !== '') {
        console.log(oldValue);
      } else if (newValue !== oldValue) {
        console.log(newValue);
      } else {
        console.log('no change');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
input, textarea
  width: 250px

label input, label textarea
  display: block

.form-input
  margin: 10px 0
</style>
