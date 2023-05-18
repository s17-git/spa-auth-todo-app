<template>
  <li class="list-group-item py-3">
    <div class="d-flex justify-content-start align-items-center">
      <input 
        class="form-check-input mt-0 cursor-pointer" 
        :class="completedClass" 
        type="checkbox" 
        :checked="task.is_completed" 
        @click="markTaskAsCompleted"
      />
      <div 
        class="ms-2 flex-grow-1" 
        :class="completedClass" 
        title="Double click the text to edit or remove"
        @dblclick="isEdit = true"
      >
        <div class="relative" v-if="isEdit">
          <input 
            class="editable-task" 
            type="text" 
            v-focus
            :value="task.name"
            @keyup.esc="isEdit = false" 
            @keyup.enter="updateTask"
          />
        </div>
        <span v-else>{{ task.name }}</span>
      </div>
      <div class="task-date">24 Feb 12:00</div>
    </div>
    <TaskActions 
      v-show="!isEdit" 
      @edit="isEdit = true" 
      @remove="removeTask"
    />
    
  </li>
</template>

<script setup>
import { computed, ref } from 'vue';
import TaskActions from './TaskActions.vue';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['updated', 'completed', 'removed']);

const completedClass = computed(() => props.task.is_completed? 'completed': '' );

const vFocus = {
  mounted: (el) => el.focus()
}

const updateTask = (event) => {
  const taskValue = event.target.value.trim();
  if(taskValue) {
    const updatedTask = {...props.task, name: taskValue};
    isEdit.value = false;
    emit('updated', updatedTask);
  }
}

const markTaskAsCompleted = () => {
  const updatedTask = {...props.task, is_completed: !props.task.is_completed};
  emit('completed', updatedTask);
}

const removeTask = () => {
  if(confirm('Are you sure ?')) {
    emit('removed', props.task);
  }
}

const isEdit = ref(false);
</script>

<style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
</style>