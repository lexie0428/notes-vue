<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>HOME PAGE</h1>
        <div id="app">
          <message v-if="message" />
          <newNote />

          <!-- title -->
          <div class="note-header">
            <h1>{{ title }}</h1>
            <search placeholder="Find your note" />

            <div class="icons">
              <svg
                :class="{ active: grid }"
                style="cursor: pointer"
                @click="grid = true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3" y2="6" />
                <line x1="3" y1="12" x2="3" y2="12" />
                <line x1="3" y1="18" x2="3" y2="18" />
              </svg>
              <svg
                :class="{ active: !grid }"
                style="cursor: pointer"
                @click="grid = false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
          </div>

          <!-- note list -->
          <notes />
        </div>
      </div>
    </section>
  </div>
</template>

// <script>
import message from "@/components/Message.vue";
import notes from "@/components/Notes.vue";
import newNote from "@/components/NewNote.vue";
import search from "@/components/Search.vue";
export default {
  components: {
    message,
    notes,
    newNote,
    search
  },
  data() {
    return {
      title: "Notes App",
    };
  },
  computed: {
    grid: {
      get() {
        return this.$store.getters.getGrid;
      },
      set(value) {
        this.$store.dispatch("changeGrid", value);
      }
    },
    message() {
      return this.$store.getters.getMessage;
    }
  }
};
</script>

<style <style lang="scss" scoped>
.container {
  width: 60%;
}
</style>