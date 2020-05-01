import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { logindata } from '../Redux/Actions'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let temp = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.logindata(temp)
    }
    render() {
        if(!this.props.value.login){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="col-12">
                            <label>Username</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" name="username" placeholder="Enter username" value={this.state.username} type="text" onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <label>Password</label>
                        </div>
                        <div className="col-12">
                            <input className="col-12 form-control" type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="col-12 mt-2 text-center">
                            <button className="btn btn-primary" onClick={this.handleClick}>Login</button>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
        }
        else {
            return(
                <Redirect to="/" />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {

        value: state.loginreducers  
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logindata: (a) => dispatch(logindata(a))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
