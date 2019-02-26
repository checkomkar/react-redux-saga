import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableRow from './TableRow'
class ListUser extends Component {
    state = {}
    render() {
        return (
            <div>
                <h3>
                    User List
                </h3>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user, i)=>
                                <TableRow key={i} user={user} id={i}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(ListUser)