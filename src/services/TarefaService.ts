import axios from "@/plugins/axios";
import { ITarefa } from "@/interfaces/tarefa.interface";

class TarefaService {
  async getTarefas(): Promise<any> {
    try{
        const response = await axios.get<ITarefa[]>("/tarefa")
        return response.data
    } catch(error){
        console.error(error)
    }
  }
  async create(tarefa: ITarefa):Promise<any>{
    try {
      const response = await axios.post<ITarefa>("/tarefa",tarefa)
      return response.data
    } catch(error){
      console.error(error)
    }
  }
  async delete(tarefa: ITarefa):Promise<any>{
    try {
      const response = await axios.delete<ITarefa>(`/tarefa/${tarefa.id}`)
      return response.data
    } catch(error){
      console.error(error)
    }
  }
}
export default new TarefaService();
