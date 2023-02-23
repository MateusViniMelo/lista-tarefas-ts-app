<template>
  <div
    class="w-full p-3 py-4 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">

    <div class="font-normal text-gray-700 dark:text-gray-400 flex justify-center" v-if="!editTarefa">
      <span role="status" v-if="changingStatus">
        <svg aria-hidden="true" class="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-400"
          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </span>
      <button type="button" @click="alterarStatus(tarefa)" v-if="!changingStatus"
        :class="tarefa.completado ? 'bi bi-check-circle-fill text-green-300 mr-3 cursor-pointer' : 'bi bi-check-circle mr-3 hover:text-green-300 cursor-pointer'"></button>
      {{ tarefa.titulo }}
    </div>
    <div class="relative z-0 w-2/3  pb-0 group" v-if="editTarefa">
      <form @submit.prevent="atualizarTarefa">
        <input type="text" name="floating_tarefa" id="floating_tarefa"
          class="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
          v-model="titulo" placeholder=" " required />
        <label for="floating_tarefa"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tarefa</label>
      </form>

    </div>
    <span>
      <button type="button"
        :class="`bi bi-pencil-square mr-3 cursor-pointer${editTarefa ? ` text-blue-500` : ` hover:text-blue-500`}`"
        @click="editarStatusTarefa"></button>
      <button type="button" class="bi bi-trash mr-3 hover:text-red-500 cursor-pointer" @click="mudarModal"></button>
    </span>
    <TarefaDeleteModal :tarefa="tarefa" :open="mostrarModal" :key="tarefa.id" @closeModal="mudarModal">
    </TarefaDeleteModal>
  </div>
</template>

<script lang="ts">
import { tarefaStore } from "@/stores/tarefa";
import { mapActions } from "pinia";
import { defineComponent } from "vue"
import type { PropType } from "vue"
import { ITarefa } from "@/interfaces/tarefa.interface";
import TarefaDeleteModal from "./TarefaDeleteModal.vue";

export default defineComponent({
  name: "TarefaApp",
  components: { TarefaDeleteModal },
  data() {
    return {
      mostrarModal: false as boolean,
      changingStatus: false as boolean,
      editTarefa: false as boolean,
      titulo: this.tarefa.titulo as string
    }
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
    ...mapActions(tarefaStore, ["mudarStatus","editarTarefa"]),
    mudarModal() {
      this.mostrarModal = !this.mostrarModal
    },
    alterarStatus(tarefa: ITarefa) {
      this.changingStatus = true
      this.mudarStatus(tarefa).finally(() => {
        this.changingStatus = false
      })
    },
    editarStatusTarefa() {
      this.editTarefa = !this.editTarefa
    },
    atualizarTarefa(){
      
      this.editarTarefa(this.tarefa,this.titulo).finally(() =>{
        this.editTarefa = false
      })
    }



  }

})
</script>

<style></style>