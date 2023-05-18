<template>
  <div class="task-actions">
    <button 
      class="btn btn-sm btn-circle btn-outline-secondary me-1"
      @click="emit('edit')">
      <iconPencil />
    </button>

    <button 
      class="btn btn-sm btn-circle btn-outline-danger"
      @click="emit('remove')">
      <iconTrash />
    </button>
  </div>
</template>
<script setup>
import iconTrash from '../icons/iconTrash.vue';
import iconPencil from '../icons/iconPencil.vue';

const emit = defineEmits(['edit', 'remove']);

</script>