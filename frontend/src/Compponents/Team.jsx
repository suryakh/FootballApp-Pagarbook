import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect,Link} from 'react-router-dom'

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
            <div className="col-8">
                <div>
                    <h3>{this.state.team.tla}</h3>
                </div>
                <div>
                    <img src={this.state.team.flag} />
                </div>
                <div>
                    <p>{this.state.team.name}</p>
                </div>
                <div>
                    <p>{this.state.team.Area}</p>
                </div><div>
                    <p>{this.state.team.shortName}</p>
                </div><div>
                    <p>{this.state.team.address}</p>
                </div><div>
                    <p>{this.state.team.website}</p>
                </div><div>
                    <p>{this.state.team.founded}</p>
                </div><div>
                    <p>{this.state.team.clubcolor}</p>
                </div><div>
                    <p>{this.state.team.lastUpdated}</p>
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
