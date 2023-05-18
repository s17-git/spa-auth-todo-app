<template>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <!-- Add new Task -->
            <NewTask />
            
            <!-- List of tasks -->
            <!-- uncompleted tasks -->
            <Tasks :tasks="unCompletedTasks" />

            <div class="text-center my-3" v-show="showToggleCompletedBtn" >
                <button class="btn btn-secondary"
                @click="showCompletedTasks = !showCompletedTasks">
                <span v-if="!showCompletedTasks">Show Completed </span>
                <span v-else>Hide Completed </span>
                </button>
            </div>
            <!-- completed tasks -->

            <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks" />

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../stores/task';
import Tasks from '../components/tasks/Tasks.vue';
import NewTask from '../components/tasks/NewTask.vue';


const store = useTaskStore();
const { completedTasks, unCompletedTasks } = storeToRefs(store);
const {fetchAllTasks} = store;

onMounted(async () => {
   await fetchAllTasks();
});

const showToggleCompletedBtn = computed(() => (completedTasks.value.length && unCompletedTasks.value.length));

const completedTasksIsVisible = computed(
    () => completedTasks.value.length > 0 || unCompletedTasks.value.length === 0
);

const showCompletedTasks = ref(false);

</script>
<style scoped>
.btn {
    background: indigo;
}
</style>