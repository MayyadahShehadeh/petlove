

import React, { Component } from 'react'
import SignIn from './components/context/signin';
import SignUp from './components/context/signUp';

export class LoginRender extends Component {
    state = {
        form: "login",
    };

    render() {
        return (
            <div>
                {this.state.form === "login" ? <SignIn /> : <SignUp />}
                {this.state.form === "login" ? (
                    <p  style={{ marginRight: "300px", marginLeft: "300px" }}>

                        Don't have an account ?
                        <a
                            href="#"
                            onClick={() => this.setState((s) => ({ ...s, form: "register" }))}
                        >
                            Register
                        </a>
                    </p>
                ) : (
                    <p  style={{ marginRight: "300px", marginLeft: "300px" }}>
                        Already have an account ?

                        <a
                            href="#"
                            onClick={() => this.setState((s) => ({ ...s, form: "login" }))}
                        >
                            Login here                        </a>
                    </p>
                )}
            </div>
        );
    }
}
export default LoginRender;
