<template>
  <div
    class="w-full p-3 py-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 flex justify-between">

    <p class=" font-normal text-gray-700 dark:text-gray-400"><i
        :class="tarefa.completado ? 'bi bi-check-circle-fill text-green-300 mr-2 cursor-pointer' : 'bi bi-check-circle mr-2 hover:text-green-300 cursor-pointer'"></i>
      {{ tarefa.id }} - {{ tarefa.titulo }}
    </p>
    <button type="button" class="bi bi-trash mr-3 text-red-500 cursor-pointer" @click="mudarModal"></button>
    <TarefaDeleteModal :tarefa="tarefa" :open="mostrarModal" :key="tarefa.id" @closeModal="mudarModal"></TarefaDeleteModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type { PropType } from "vue"
import { ITarefa } from "@/interfaces/tarefa.interface";
import TarefaDeleteModal from "./TarefaDeleteModal.vue";
export default defineComponent({
  name: "TarefaApp",
  components: { TarefaDeleteModal },
  data() {
    return {
      mostrarModal: false as boolean
    }
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
    mudarModal() {
      this.mostrarModal = !this.mostrarModal
    },
    
    
  }

})
</script>

<style></style>