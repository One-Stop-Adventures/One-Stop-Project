import axios from 'axios'

export function UserLogout( ){

    return axios.get('/logout')
        .then(res => {
            res.status(200).json('Logged Out')
        })
        .catch(res => {
            res.status(500).json('Failed')
        })

}