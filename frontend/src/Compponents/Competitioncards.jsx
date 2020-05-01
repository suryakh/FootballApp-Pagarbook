import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import '../App.css'


class Competitioncards extends Component {
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
        return (
            <div className="col-5 m-2">
                <div className="row">
                    <div className='col-10'>
                        <div className="col-12">
                            <p><span>Area:</span>{this.props.data.Area}</p>
                        </div>
                        <div className="col-12">
                            <h1>{this.props.data.Name}</h1>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <p><span>start:</span>{this.props.data.startDate}</p>

                                </div>
                                <div className="col-6">
                                    <p><span>end:</span>{this.props.data.endDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                    <Link to={`/competition?id=${this.props.data.id}/teams`}><button onClick={()=>this.getteams(this.props.data.id)}>>></button></Link>
                    </div>
                </div>
                <div className="col-12"><p><span>UpdatedBy:</span>{this.props.data.lastUpdate}</p></div>
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
        // storedata : (data)=>dispatch(storedata(data)),
        // sentrequest:()=>dispatch(sentrequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitioncards)
