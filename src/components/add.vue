<template>
  <div class="event-add">
    <input
      type="text"
      class="n-input"
      v-model="content"
      placeholder="待办事项"
      @keyup.enter="submit"
    />
    <button class="add-btn" @click="submit">提交</button>
  </div>
</template>

<script setup>
import { useNoteStore } from '../store/index'
import { ref } from 'vue'
const note = useNoteStore()
const content = ref('')
const submit = () => {
  let params = {
    id: note.id,
    content: content.value
  }
  note.id++
  note.add(params)
}
</script>

<style lang="scss" >
.event-add {
  position: relative;
  padding: 30px 90px 30px 0;
  margin-top: 100px;
  font-size: 16px;
  .n-input {
    width: 100%;
    height: 40px;
    padding: 7px 10px;
    line-height: 26px;
    border: 1px solid #c0ccda;
    border-radius: 4px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-sizing: border-box;
    font-size: inherit;
    &:focus {
      outline: none;
    }
  }
  .add-btn {
    position: absolute;
    right: 0;
    top: 30px;
    width: 80px;
    height: 40px;
    line-height: 26px;
    color: #f1f3ee;
    background-color: #81d329;
    /*transition: background .3s ease-in;*/
  }
}
</style>