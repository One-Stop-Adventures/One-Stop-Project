import axios from 'axios'


export function addTodo(newTodo){
    console.log(newTodo.id)
    return axios.post(`/api/dashboard/${newTodo.id}/todo`,{
      item: newTodo.item
    })
  }

export function getTodos(id){
  return axios.get(`/api/dashboard/${id}/todo`)
}
