<template>
  <div>
    <div class="flex justify-center mt-28 mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3">
        <tarefa-form></tarefa-form>
      </div>
    </div>
    <div class="flex justify-center mt-5 mx-4">
      <tarefas-lista></tarefas-lista>
    </div>


  </div>
</template>

<script lang="ts">

import TarefaForm from '@/components/TarefaForm.vue';
import TarefasLista from '@/components/TarefasLista.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: { TarefasLista, TarefaForm },
  name: 'HomeView',



});
</script>
<style></style>
