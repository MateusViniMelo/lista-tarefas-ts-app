<template>
  <div >

    <header-app></header-app>
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HeaderApp from './components/HeaderApp.vue';
export default defineComponent({
  name: "App",
  components: { HeaderApp }
})
</script>
<style>
body {
  background-color: rgb(249 250 251);
}
</style>
