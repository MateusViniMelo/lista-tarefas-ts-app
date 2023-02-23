import { defineStore } from "pinia";
import { ITarefa } from "@/interfaces/tarefa.interface";
import TarefaService from "@/services/TarefaService";
export const tarefaStore = defineStore("tarefa", {
    state: () => {
        return {
            tarefas: [] as ITarefa[],
            tarefa: null as ITarefa | null,
        };
    },
    actions: {
        async loadTarefas() {
            this.tarefas = await TarefaService.getTarefas();
        },
        async setTarefa(tarefa: ITarefa) {
            this.tarefas.unshift(await TarefaService.create(tarefa));
        },
        async removerTarefa(tarefa: ITarefa) {
            await TarefaService.delete(tarefa).then((response) => {
                const index = this.tarefas.findIndex((item) => item.id === response.id);
                this.tarefas.splice(index, 1);
            });
        },
        async editarTarefa(tarefa: ITarefa, titulo:string) {
            await TarefaService.update(tarefa, titulo).then((response) =>{
                const index = this.tarefas.findIndex((item) => item.id === response.id);
                this.tarefas[index].titulo = titulo
            })
        },
        async mudarStatus(tarefa: ITarefa) {
            await TarefaService.mudarStatus(tarefa).then(() =>{
                const index = this.tarefas.findIndex((item) => item.id === tarefa.id);
                this.tarefas[index].completado = !this.tarefas[index].completado
            })
        },
    },
});
