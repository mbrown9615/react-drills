import React, {Component} from 'react';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind( this );
    }

    handleUsernameChange(value){
        this.setState({username: value})
    }

    handlePasswordChange(value){
        this.setState({password: value})
    }

    handleLogin(){
        alert(`username:${this.state.username} password:${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleUsernameChange(e.target.value)}/>
                <input onChange={(e)=>this.handlePasswordChange(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default Login;