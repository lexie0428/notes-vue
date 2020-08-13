<template>
  <!-- new note -->
  <div>
  <div class="new-note">
    <label>Title</label>
    <input type="text" v-model="note.title"/>
    <label>Description</label>
    <textarea v-model="note.descr"></textarea>
    <priority :note="note"/>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
  
</div>
</template>

<script>
import priority from '@/components/Priority.vue'
export default {
  components: {
    priority
  },
  computed: {
    note() {
        return this.$store.getters.getNote;
      },
  },
  methods: {
    addNote() {
      this.$store.dispatch('addNote')
    },
  }
};
</script>

<style lang="scss" scoped>
.new-note {
  text-align: center;
}

.btnPrimary {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
