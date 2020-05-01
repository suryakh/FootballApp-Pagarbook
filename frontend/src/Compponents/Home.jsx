import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import qs from 'query-string'
import {Redirect} from 'react-router-dom'
import {getcompetitions} from '../Redux/Actions'
import {Link} from 'react-router-dom'
import Competitioncards from './Competitioncards'
import '../App.css'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.props.getcompetitions(this.props.value.token)
    }
    render() {
        console.log(this.props.data)
        if(this.props.value.login){
        return (
            <div className="row maindiv">
                <div className="col-9">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <h2>Competitions</h2>
                        </div>
                    {this.props.data.getcompdata && this.props.data.competitions.map((ele)=><Competitioncards data={ele}/>) }
                    </div>
                </div>
                <div className="col-3 border">
                    <div className="col-12 bg-light">
        <h3>{`Teams For ${this.props.data.teamslist.Name}`}</h3>
                    </div>
        {this.props.data.teamdata && this.props.data.teamslist.map((ele)=><div className="col-12"><Link to= {`/teams/${ele.id}`}><div className="col-12 teamlist"><h3>{ele.name}</h3></div></Link></div>)}
                </div>
                Home
            </div>
        )
    }
    else {
        return(
            <Redirect to="/login" />
        )
    }
}
}

const mapStateToProps = (state) => {
    return {
        value: state.loginreducers,
        data:state.datareducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getcompetitions : (data)=>dispatch(getcompetitions(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
