<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <div id="app">
            <message v-if="message" :message="message" />
            <newNote :note="note" @addNote="addNote" />

            <!-- title -->
            <div class="note-header">
              <h1>{{ title }}</h1>
              <search :value="search" placeholder="Find your note" @search="search = $event"/>
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
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3" y2="6"></line>
                  <line x1="3" y1="12" x2="3" y2="12"></line>
                  <line x1="3" y1="18" x2="3" y2="18"></line>
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
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
            </div>

            <!-- note list -->
            <notes :notes="notesFilter" :grid="grid" @remove="removeNote" @changeTitle="changeTitle" @changeDescr="changeDescr"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import message from '@/components/Message.vue';
import notes from '@/components/Notes.vue';
import newNote from '@/components/NewNote.vue';
import search from '@/components/Search.vue';
export default {
  components: {
    message,
    notes,
    newNote,
    search
  },
  data() {
    return {
      title: 'Notes App',
      grid: true,
      message: null,
      search: '',
      note: {
        title: '',
        descr: '',
        priority: 'usual'
      },
      notes: [
        {
          title: 'First note',
          descr: 'Description for first note',
          date: new Date().toLocaleString(),
          priority: 'usual',
          id: uuidv4()
        },
        {
          title: 'Second note',
          descr: 'Description for second note',
          date: new Date().toLocaleString(),
          priority: 'important',
          id: uuidv4()
        },
        {
          title: 'Third note',
          descr: 'Description for third note',
          date: new Date().toLocaleString(),
          priority: 'critical',
          id: uuidv4()
        },
      ],
    };
  },
  computed: {
    notesFilter() {
      let array = this.notes;
      let search = this.search;
      if (!search) return array;
      search = search.trim().toLowerCase();
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    }
  },
  methods: {
    addNote() {
      let { title, descr, priority } = this.note;
      if (title === '') {
        this.message = 'title can`t be blank';
        return false;
      }
      this.notes.push({
        title,
        descr,
        date: new Date().toLocaleString(),
        priority,
        id: uuidv4()
      });
      this.message = null;
      this.note.title = '';
      this.note.descr = '';
      this.note.priority = 'usual';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    changeTitle(id, newTitle) {
      const index = this.notes.findIndex(el => el.id === id);
      this.notes[index].title = newTitle;
      this.notes[index].date = new Date().toLocaleString();
    },
    changeDescr(id, newDescr) {
      const index = this.notes.findIndex(el => el.id === id);
      this.notes[index].descr = newDescr;
      this.notes[index].date = new Date().toLocaleString();
    }
  },
};
</script>

<style></style>
