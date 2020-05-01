import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
import Home from '../Compponents/Home'
import Login from '../authorization/Login'
import Signup from '../authorization/Signup'
import Nav from '../Compponents/Nav'
import Team from '../Compponents/Team'


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
                    <Route path='/teams/:id' exact render={(props)=><Team {...props} />} />
                </Switch>
                <div className="container-fluid">
                    some dsataaaa
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps ={

}

export default connect(mapStateToProps, mapDispatchToProps)(Rounter)
