import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getcompetitions, getuserfav } from '../Redux/Actions'
import { Link } from 'react-router-dom'
import Competitioncards from './Competitioncards'
import '../App.css'

export class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getuserfav(this.props.value.token)
        this.props.getcompetitions(this.props.value.token)
    }
    render() {
        console.log(this.props.data)
        if (this.props.value.login) {
            return (
                <div className="row maindiv p-3">
                    <div className="col-lg-9 col-xl-9 col-md-9 col-sm-12" >
                        <div className="row d-flex justify-content-center">
                            <div className="col-12">
                                <div className="text-white">
                                    <h1>Welcome to Football Champion Leagues..</h1>
                                    <div className="col-12 text-center competionsdiv">
                                        <h2>Competitions</h2>
                                    </div>
                                    {this.props.data.userfav[0] && <div className="userfavdiv col-12 mt-2 p-2">
                                    <h3>Your favourite competions</h3>
                                    <div className="row text-center m-1">{this.props.data.userfav.map((ele) => <div className="col-4 mt-1 p-3">{ele.Name}</div>)}</div>
                                    </div>}
                                </div>
                            </div>
                            {this.props.data.getcompdata && this.props.data.competitions.map((ele) => <Competitioncards data={ele} />)}
                        </div>
                    </div>
                    <div className="col-3 border d-none d-md-block ">
                        <div className="col-12 bg-light p-3 teamlistdiv">
                            {this.props.data.teamdata && <h3>{`Teams For ${this.props.data.teamslist[0].Name}`}</h3>}
                        </div>
                        {this.props.data.teamdata && this.props.data.teamslist.map((ele) => <div className="col-12"><Link to={`/teams/${ele.id}`}><div className="row teamlist"><div className="col-6 text-white"><h3>{ele.name}</h3></div><div className="col-6 text-right"><h3>{ele.tla}</h3></div></div></Link></div>)}
                    </div>
                </div>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.loginreducers,
        data: state.datareducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getcompetitions: (data) => dispatch(getcompetitions(data)),
        getuserfav: (data) => dispatch(getuserfav(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
