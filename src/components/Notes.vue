<template>
  <div class="notes">
    <div
      class="note"
      :class="{
        full: !grid,
        important: note.priority === 'important',
        critical: note.priority === 'critical',
      }"
      v-for="(note, index) in notes"
      :key="index"
      :id="note.id"
    >
      <div class="note-header" :class="{ full: !grid }">
        <p @click="() => getInput(note.id)">{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>
      <input
        v-model="newTitle"
        v-on:keyup.enter="() => resetTitle(note.id, true)"
        v-on:keyup.esc="() => resetTitle(note.id, false)"
        :placeholder="note.title"
        style="display: none;height: 10px;margin-bottom: 0"
        class="title-input"
      />
      <div class="note-body">
        <p @click="() => getTextarea(note.id)" class="note-descr">{{ note.descr }}</p>
        <textarea
          v-model="newDescription"
          v-on:keyup.enter="() => resetDescr(note.id, true)"
          v-on:keyup.esc="() => resetDescr(note.id, false)"
          :placeholder="note.descr"
          style="display: none;height: 10px;margin-bottom: 0"
        ></textarea>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTitle: '',
      newDescription: '',
    };
  },
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    removeNote(index) {
      this.$emit('remove', index);
    },
    getInput(id) {
      const note = document.getElementById(`${id}`);
      const title = note.getElementsByClassName('note-header')[0];
      title.style.display = 'none';
      const input = note.getElementsByClassName('title-input')[0];
      input.style.display = 'block';
    },
    resetTitle(id, change) {
      if (change) {
        this.$emit('changeTitle', id, this.newTitle);
      }
      const note = document.getElementById(`${id}`);
      const title = note.getElementsByClassName('note-header')[0];
      title.style.display = 'flex';
      const input = note.getElementsByClassName('title-input')[0];
      input.style.display = 'none';
      this.newTitle = '';
    },
    getTextarea(id) {
      const note = document.getElementById(`${id}`);
      const descr = note.getElementsByClassName('note-descr')[0];
      descr.style.display = 'none';
      const input = note.getElementsByTagName('textarea')[0];
      input.style.display = 'block';
    },
    resetDescr(id, change) {
      if (change) {
        this.$emit('changeDescr', id, this.newDescription);
      }
      const note = document.getElementById(`${id}`);
      const descr = note.getElementsByClassName('note-descr')[0];
      descr.style.display = 'block';
      const input = note.getElementsByTagName('textarea')[0];
      input.style.display = 'none';
      this.newDescription = '';
    },
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 49%;
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
  &.important {
    background-color: rgb(248, 241, 210);
  }
  &.critical {
    background-color: rgb(248, 213, 210);
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  h1 {
    font-size: 22px;
  }
  p {
    font-size: 22px;
    color: #25308f;
  }
  svg {
    margin-right: 12px;
    color: #999999;
    &.active {
      color: #233ba8;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &.full {
    justify-content: center;
    p {
      margin-right: 19px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999999;
  }
}
</style>
