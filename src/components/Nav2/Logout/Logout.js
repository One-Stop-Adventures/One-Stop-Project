import React from 'react'

import {UserLogout} from '../../../actions/Logout/Lougout_action'


export default class Logout extends Component {

    logoutUser(){
        UserLogout()
            .then(response => {
                
            })
            
    }



}