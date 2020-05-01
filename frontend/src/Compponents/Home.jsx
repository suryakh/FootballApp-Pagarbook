import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import qs from 'query-string'
import {Redirect} from 'react-router-dom'
import {storedata,sentrequest} from '../Redux/Actions'
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
        this.props.sentrequest()
        axios({
            method:'GET',
            url:'http://localhost:5000/competitions/info',
            headers: {'Authorization': this.props.value.token}
        })
        .then((res)=>this.props.storedata(res.data))
        .catch((err)=>console.log(err))
    }
    getteams(id){
        console.log(id)
        axios({
            method:'GET',
            url:`http://localhost:5000/competitions/teams/${id}`,
            headers: {'Authorization': this.props.value.token}
        })
        .then((res)=>console.log(res))
    }
    render() {
        console.log(this.props.data)
        if(this.props.value.login){
        return (
            <div className="row">
                <div className="col-9">
                    {/* {this.props.data.getcompdata && this.props.data.competitions.map((ele)=><div><Link to={`/competition?id=${ele.id}/teams`}><button onClick={()=>this.getteams(ele.id)}>{ele.Name}</button></Link></div>) } */}
                    <div className="row">
                    {this.props.data.getcompdata && this.props.data.competitions.map((ele)=><Competitioncards data={ele}/>) }
                    </div>
                </div>
                <div className="col-3">
                    hello   
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
    // select competitions.id as competition_id,competitions.Name,teams.* from compteams left join competitions ON compteams.competition_id = competitions.id left join teams ON compteams.team_id = teams.id where competitions.id = 3;

    return {
        value: state.loginreducers,
        data:state.datareducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storedata : (data)=>dispatch(storedata(data)),
        sentrequest:()=>dispatch(sentrequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
