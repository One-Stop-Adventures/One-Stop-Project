import React, {Component} from 'react';
import { connect } from 'react-redux'
import SemanticDropDown from './semantic-ui-dropdown/semantic-dropdown'

import { fetchParks } from '../../../../ducks/nps_reducer'

class NPSapi extends Component{
    componentDidMount(){
        this.props.fetchParks( 'yellow' )
    }
    
    render() {
        console.log( this.props.parks )
        return(
            <div>
                <SemanticDropDown 
                parks={this.props.parks} />
            </div>
        )
    }
}

function mapStateToProps( state ){
    return{
        parks: state.parks.park_info
    }
}

const mapDispatchToProps = {
    fetchParks
}

export default connect(mapStateToProps, mapDispatchToProps)(NPSapi)

