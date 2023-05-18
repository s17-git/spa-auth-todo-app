import { defineStore } from 'pinia';
import { allTasks, createTask, updateTask, completeTask, removeTask } from '../http/task-api';
import { computed, ref } from 'vue';


export const useTaskStore = defineStore('taskStore', () => {

  const tasks = ref([]);
  const isLoading = ref(false);

  const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
  const unCompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))

 const fetchAllTasks = async () => {
    isLoading.value = true;
    const {data} = await allTasks();
    tasks.value = data.data;
    isLoading.value = false;
  }

  const handleAddedTask = async (newTask) => {
    isLoading.value = true;
    const {data: {data: createdTask}} = await createTask(newTask);
    tasks.value.unshift(createdTask);
    isLoading.value = false;
  }

  const handleUpdatedTask = async (task) => {
    const {data: {data: updatedTask}} = await updateTask(task.id, {name: task.name}); 

    const currentTask = tasks.value.find(el => el.id === task.id);
    currentTask.name = updatedTask.name;
}

const handleCompletedTask = async (task) => {
    const {data: {data: updatedTask}} = await completeTask(task.id, {is_completed: task.is_completed}); 

    const currentTask = tasks.value.find(el => el.id === task.id);
    currentTask.is_completed = updatedTask.is_completed;
}

const handleRemovedTask = async (task) => {
    try {
      await removeTask(task.id);
      tasks.value = tasks.value.filter(el => el.id !== task.id);
    } catch (error) {
      alert( error.message) ;
    }
    
}

  return {
    tasks, 
    completedTasks, 
    unCompletedTasks, 
    fetchAllTasks,
    handleAddedTask,
    handleUpdatedTask,
    handleCompletedTask,
    handleRemovedTask,
    isLoading
  }
 
});