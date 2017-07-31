import axios from 'axios'


export function addTodo(newTodo){
    return axios.post('/api/dashboard/:id/todo')
}