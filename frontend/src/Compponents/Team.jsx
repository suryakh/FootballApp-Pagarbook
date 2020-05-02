import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

export class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            team: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let temp = this.props.data.teamslist.find((ele) => {
            if (ele.id == id) {
                return ele
            }
        })
        this.setState({
            team: temp
        })
    }
    render() {
        if(this.props.value.login){
        return (
            <div className="container d-flex justify-content-center">
            <div className="col-lg-8 col-xl-8 col-sm-12 col-md-12 p-5 m-lg-5 m-xl-5  teamcard">
                <div className="teamtitle p-3 m-2">
                    <h3>{this.state.team.tla}</h3>
                </div>
                <div className="border text-center flagdiv">
                    <img className="img-fluid" src={this.state.team.flag} />
                </div>
                <div className="m-4">
                <div>
                    <p><span>Team Name: </span>{this.state.team.name}</p>
                </div>
                <div>
                    <p><span>Team From: </span>{this.state.team.Area}</p>
                </div>
                <div>
                    <p><span>Founded: </span>{this.state.team.founded}</p>
                </div>
                <div>
                    <p><span>address: </span>{this.state.team.address}</p>
                </div>
                <div>
                    <p><span>WebSite: </span>{this.state.team.website}</p>
                </div>
                <div>
                    <p><span>ClubColor: </span>{this.state.team.clubcolors}</p>
                </div>
                </div>
                <div className="text-right">
                    <p><span>Lastupdated:</span>{this.state.team.lastUpdated}</p>
                </div>
            </div>
            </div>
        )
    }
    else {
        return(
            <Redirect to='/login'/>
        )
    }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.datareducer,
        value:state.loginreducers
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Team)
