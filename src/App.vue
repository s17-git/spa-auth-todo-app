<template>
  <Navbar /> 
  <main style="min-height: 50vh; margin-top: 2rem;">
    <Loading v-show="isLoading"/> 
    <section class="container">
      <routerView v-slot="{Component}"> 
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </routerView> 
    </section> 
  </main>
  <Footer /> 

</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import Loading from './components/Loading.vue';
  import {useTaskStore} from "./stores/task";
  import { storeToRefs } from 'pinia';

  const store = useTaskStore();
  const {isLoading} = storeToRefs(store)
</script>

<style scoped>

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
 
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
 
</style>
