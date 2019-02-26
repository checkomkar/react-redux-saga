import React, { Component } from 'react'
import {connect} from 'react-redux';
import addUser from '../../actions';
import { bindActionCreators } from 'redux';
class AddUser extends Component {
    name = React.createRef();
    render() {
        return (
            <div>
                <h3>
                    Add User
                </h3>
                <input type="text" ref={this.name}/>
                <button onClick={()=>this.props.addUser(this.name.current.value)}>
                    Add
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(addUser, dispatch)
}

export default connect(()=>{return {};}, mapDispatchToProps)(AddUser)

