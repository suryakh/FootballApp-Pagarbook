import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { logindata } from '../Redux/Actions'
import { Redirect, Link } from 'react-router-dom'
import "../App.css"

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
        if (!this.props.value.login) {
            return (
                <div className="container d-flex justify-content-center">
                    <div className="col-6" style={{ height: "600px", marginTop: "20%" }}>
                        <div className="row p-5 formdiv" >
                            {/* <div className="col-12"> */}
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
                            <div className="col-12 m-2"><p>If you don't have account <Link to="/signup">Signup here</Link></p></div>
                            <div className="col-12 mt-2 text-center">
                                <button className="btn btn-primary" onClick={this.handleClick}>Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
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
