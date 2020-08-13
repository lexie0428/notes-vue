import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    addNote(state) {
      let { title, descr, priority } = state.note;
      console.log(state.note);
      if (title === '') {
        state.message = 'title can`t be blank';
        return;
      } 
      state.notes.push({
        title,
        descr,
        date: new Date().toLocaleString(),
        priority,
        id: uuidv4()
      });
      state.message = null;
      state.note.title = '';
      state.note.descr = '';
      state.note.priority = 'usual';
    },
    removeNote(state, payload) {
      state.notes.splice(payload, 1);
    },
    changeTitle(state, payload) {
      const index = state.notes.findIndex(el => el.id === payload.id);
      state.notes[index].title = payload.newTitle;
      state.notes[index].date = new Date().toLocaleString();
    },
    changeDescr(state, payload) {
      const index = state.notes.findIndex(el => el.id === payload.id);
      state.notes[index].descr = payload.newDescr;
      state.notes[index].date = new Date().toLocaleString();
    },
    changeGrid(state, payload) {
      state.grid = payload;
    },
    changeSearch(state, payload) {
      state.search = payload;
    }
  },
  actions: {
    addNote({commit}) {
      commit('addNote');
    },
    removeNote({commit}, payload) {
      commit('removeNote', payload);
    },
    changeTitle({commit}, payload) {
      commit('changeTitle', payload);
    },
    changeDescr({commit}, payload) {
      commit('changeDescr', payload);
    },
    changeGrid({commit}, payload) {
      commit('changeGrid', payload)
    },
    changeSearch({commit}, payload) {
      commit('changeSearch', payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getNote(state) {
      return state.note
    },
    getMessage(state) {
      return state.message
    },
    getGrid(state) {
      return state.grid
    },
    getSearch(state) {
      return state.search
    }
  }
})