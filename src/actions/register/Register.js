import axios from 'axios';



export function registrationSubmit(newUser){
  return axios.post('/api/register',{
  username: newUser.username,
  email: newUser.email,
  password: newUser.password
})
}
