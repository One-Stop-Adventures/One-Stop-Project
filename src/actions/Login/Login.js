import axios from 'axios'

export function UserLogin(user){
  // console.log(user)
  return axios.post('/login',{
    username: user.username,
    password: user.password
  })

}
