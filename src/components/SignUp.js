import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
class SignUp extends Component {
    render() {
        return (
            <div>
                <h2> Sign Up</h2>
                <form>
                    <div>
                        <label>UserName</label>
                        <Field name="userName"
                            component="input"
                            type="text" placeholder="Enter UserName" />
                    </div>

                    <div>
                        <label>Password</label>
                        <Field name="password"
                            component="input"
                            type="password"
                            placeholder="Enter Password" />
                    </div>
                    <button> Sign Up</button>
                </form>


            </div>
        )
    }
}

export default reduxForm({form: 'signup'})(SignUp);