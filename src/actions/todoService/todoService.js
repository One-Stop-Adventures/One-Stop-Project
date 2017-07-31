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

export function deleteTodos(id){
  return axios.delete(`/api/dashboard/${id}/todo`)
}
