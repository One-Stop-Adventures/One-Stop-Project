import React, {Component} from 'react'
import axios from 'axios'
import Viewbio from './Children/ViewBio'
import Editbio from './Children/EditBio'

import '../Profile.css'
import './Bio.css'

class Bio extends Component {
constructor(){
  super();
  this.state = {
    view: true,
    changePic: false,
    changePicFile: '',
    changePicUrl: ''
  };
  this.changeView = this.changeView.bind(this)
  this.editPic = this.editPic.bind(this)
  this.uploadS3 = this.uploadS3.bind(this)
}

changeView(){
  this.setState({view: !this.state.view})
}
editPic(e){
  e.preventDefault()
  this.setState({changePic: !this.state.changePic})
}
uploadS3(e){
  this.setState({changePicFile: e.target.value})
  const file = e.target.files[0]
  let changePicUrl;
  axios.get(`/api/s3?file_name=${file.name}&file_type=${file.type}`)
  .then(res => {
    const {signed_request, url} = res.data
    console.log(signed_request, url)
    changePicUrl = url
    axios.put(signed_request, file, {'x-amz-acl': 'public-read'})
    .then(response => {
      console.log(response)
      this.setState({changePicUrl})
    })

  })

}
  render(){
    return (
      <div className='bio'>


        <div className="container profile-info">

      <div className="pic-container">

        <div className="prof-box">
          {
            this.state.changePic
            ?
            <div className="edit-profile-pic" style={{backgroundImage: 'url(' + this.state.changePicUrl + ')'}}>
              <input type="file" value={this.state.changePicFile} onChange={this.uploadS3} />
              <button type='submit'>Submit</button>
            </div>
            :
            <div className="profile-pic" onClick={this.editPic}>
              <span className="glyphicon glyphicon-camera cam-icon"></span>
              <span>Change Image</span>
            </div>
          }
        </div>
</div>

        {
        this.state.view
        ?
        <Viewbio profileParams={this.props.profileParams}  changeView={this.changeView}/>
        :
        <Editbio profileParams={this.props.profileParams} changeView={this.changeView}/>
        }




        </div>











      </div>
    )
  }

}

export default Bio
