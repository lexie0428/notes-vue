<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters.getMessage;
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 0px;
}
p {
  color: red;
}
</style>
