<template>
  <div class="priority">
    <p>Please select the priority level:</p>
    <div class="radio-container">
      <input
        type="radio"
        name="priority"
        v-model="note.priority"
        value="usual"
      />
      <label>Usual</label>

      <input
        type="radio"
        name="priority"
        value="important"
        v-model="note.priority"
      />
      <label style='text-shadow: 1px 1px 15px yellow'>Important</label>

      <input
        type="radio"
        name="priority"
        value="critical"
        v-model="note.priority"
      />
      <label style='text-shadow: 1px 1px 15px red'>Critical</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-container {
  width: 40%;
  margin: 10px auto;
  display: flex;
  font-display: row;
  justify-content: space-between;
  align-items: center;
}
.priority {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
