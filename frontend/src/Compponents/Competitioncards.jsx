import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import '../App.css'
import {getteamlists } from '../Redux/Actions'


class Competitioncards extends Component {
    getteams(id){
        this.props.getteamlists(id,this.props.value.token)
        
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
        value: state.loginreducers,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getteamlists : (id,data)=>dispatch(getteamlists(id,data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitioncards)
