import React, { Component } from 'react'
import { connect } from 'react-redux'
import {singupdata} from '../Redux/Actions'
import axios from 'axios'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            mobile: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let temp= {
            username:this.state.username,
                email:this.state.email,
                password:this.state.password,
                mobile:this.state.mobile
        }
        this.props.singupdata(temp)
        // axios({
        //     method:"POST",
        //     url:"http://localhost:5000/auth/signup",
        //     data:{
        //         username:this.state.username,
        //         email:this.state.email,
        //         password:this.state.password,
        //         mobile:this.state.mobile
        //     }
        // })
        // .then((res)=>{
        //     alert("user suceessfully registered")
        // })
        // .catch ((res)=>{
        //     console.log("error")
        // })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <label>Username</label>
                    </div>
                    <div className="col-12">
                        <input name="username" value={this.state.username} type="text" onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label>Email</label>
                    </div>
                    <div className="col-12">
                        <input name="email" value={this.state.email} type="text" onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label>Password</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <label>Mobile</label>
                    </div>
                    <div className="col-12">
                        <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} />
                    </div>
                    <div className="col-12">
                        <button onClick={this.handleClick}>Signup</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value:state.loginreducer
})

const mapDispatchToProps = dispatch => {
    return {
        singupdata:(data)=>dispatch(singupdata(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
