import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../Compponents/Home'
import Login from '../authorization/Login'
import Signup from '../authorization/Signup'
import Nav from '../Compponents/Nav'


export class Rounter extends Component {
    render() {
        console.log(this.props)
        return (
            <>
            <Nav />
                <Switch>
                    <Route path='/' exact render={(props)=><Home {...props}/>} />
                    <Route path='/login' exact render={(props)=><Login {...props}/>} />
                    <Route path='/signup' exact render={(props)=><Signup {...props} />} />
                    <Route path='/competition' exact render={(props)=><Home {...props} />} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps ={

}

export default connect(mapStateToProps, mapDispatchToProps)(Rounter)
