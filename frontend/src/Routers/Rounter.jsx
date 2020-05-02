import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Switch, Route } from 'react-router-dom'
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
                    <Route path='/' exact render={(props) => <Home {...props} />} />
                    <Route path='/login' exact render={(props) => <Login {...props} />} />
                    <Route path='/signup' exact render={(props) => <Signup {...props} />} />
                    <Route path='/competition' exact render={(props) => <Home {...props} />} />
                    <Route path='/teams/:id' exact render={(props) => <Team {...props} />} />
                </Switch>
                <div className="container-fluid footerdiv">
                    <div className="container text-center d-flex justify content-center  p-5">
                        <div className="col-12">
                            <div className="row mt-2">
                                <div className="col-3">ABOUT US</div>
                                <div className="col-3">SERVICES</div>
                                <div className="col-3">CONTACT US</div>
                                <div className="col-3">BLOGS</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">Github</div>
                                <div className="col-4">twitter</div>
                                <div className="col-4">linkedin</div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-12">
                                    <p>copyrights @ 2020</p>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Rounter)
