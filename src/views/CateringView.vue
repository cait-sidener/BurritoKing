<script>
export default {
  data() {
    return {
      form: {
      clientName: '',
      clientEmail: ''
      }
    }
  },
  methods: {
    async submit() {
      this.$emit('submit', this.form)
    }
  }
}
</script>
<template>
  <div class="catering">
    <h1>Catering</h1>
  </div>
  <div class="card">
    <form @submit.prevent="submit">
      <label for="clientName">Name:</label>
      <input class="text-input" type="text" name="clientName" required v-model="form.clientName" id="clientName" placeholder="First and last name..." />
      <label for="clientEmail">Email:</label>
      <input type="email" class="text-input" name="clientEmail" required v-model="form.clientName" id="clientEmail" placeholder="Enter a valid email address..." />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .catering {
    color: #fff;
    font-family: "CactusTequila";
    font-size: 2rem;
    text-align: center;
  }
}
</style>
