<template>
  <div class="relative" @keydown.enter="addNewTask">
    <input type="text" class="form-control form-control-lg padding-right-lg"
      placeholder="+ Add new task. Press enter to save." />
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useTaskStore } from '../../stores/task';

const store = useTaskStore();

const { handleAddedTask } = store;

const newTask = reactive({
  name: '',
  is_completed: false
})

const addNewTask = event => {
  if(event.target.value.trim()) {
    newTask.name = event.target.value;
    event.target.value = '';

    handleAddedTask(newTask);
  }
}



</script>