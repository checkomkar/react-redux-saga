import React, { Component } from 'react'
import {connect} from 'react-redux';
import deleteUser from '../../actions';
import { bindActionCreators } from 'redux';
class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user}</td>
                <td><button onClick={()=>this.props.deleteUser(this.props.id)}>Delete</button></td>
            </tr>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators(deleteUser, dispatch)
}

export default connect(()=>{return {};}, mapDispatchToProps)(TableRow)