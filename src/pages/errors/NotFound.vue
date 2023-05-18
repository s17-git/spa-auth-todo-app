<template>
  <div>
    <h1>404</h1>
    <p>Sorry! The route <code>{{route.fullPath}}</code> is not available.</p>
  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
const route = useRoute();

//params.pathMatch.toString().replace(',', '/') 
</script>