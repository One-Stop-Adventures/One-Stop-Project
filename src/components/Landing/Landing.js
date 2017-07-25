import React, {Component} from 'react'

class Landing extends Component{
  render(){
    return (
      <div>
        <h1>One Stop Adventures</h1>
        <a href="http://localhost:4000/auth/facebook">Login with Facebook</a>
        <a href="http://localhost:4000/auth/google">Sign In with Google</a>

      </div>
    )
  }
}


export default Landing
