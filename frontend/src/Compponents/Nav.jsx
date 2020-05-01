import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../Redux/Actions'
import { Link } from 'react-router-dom'
import '../App.css'


export class Nav extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value.user)
        return (
            <div className="navdiv p-3">
                <div className='row'>
                    <div className="col-3">LOGO</div>
                    <div className="col-3"></div>
                    <div className="col-1"> <Link to='/'><button className="btn btn-light">Home</button></Link></div>
                    {!this.props.value.login && <div className="col-1"> <Link to='/login'><button className="btn btn-light">Login</button></Link></div>}
                    <div className="col-1"><Link to='/Signup'><button className="btn btn-light">Signup</button></Link></div>
                    {this.props.value.login && <div className="col-1"><p>{this.props.value.user}</p></div>}
                    {this.props.value.login && <div className="col-1"><button className="btn btn-light" onClick={() => this.handleClick()}>Logout</button></div>}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.loginreducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
