<template>
  <div v-if="tasks.length && show" class="card mt-2">
    <ul class="list-group list-group-flush">
      <Task v-for="task in tasks" :key="task.id" 
        :task="task"  
        @updated="handleUpdatedTask" 
        @completed="handleCompletedTask" 
        @removed="handleRemovedTask" 
      />
    </ul>     
  </div>
</template>
<script setup>
import Task from './Task.vue';
import { useTaskStore } from '../../stores/task';

const store = useTaskStore();
const { handleUpdatedTask, handleCompletedTask, handleRemovedTask } = store;

 defineProps({
  tasks: Array,
  show: {
    type: Boolean,
    default: true
  }
 });
</script>