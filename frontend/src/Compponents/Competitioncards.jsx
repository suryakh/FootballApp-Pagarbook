import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { getteamlists } from '../Redux/Actions'


class Competitioncards extends Component {
    getteams(id) {
        let reqdiv = document.getElementById(id)
        console.log(reqdiv)
        this.props.getteamlists(id, this.props.value.token)
        reqdiv.classList.remove("hidden")
        reqdiv.classList.add("d-block")
        reqdiv.classList.add("d-md-none")



    }
    render() {
        console.log(this.props.data)
        return (
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 m-2 p-3 bg-light card">
                <div className="row">
                    <div className='col-11'>
                        <div className="col-12 area text-white">
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
                                <div className="col-6 text-right">
                                    <p><span>end:</span>{this.props.data.endDate}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-right"><p><span>UpdatedBy:</span>{this.props.data.lastUpdate}</p></div>
                    </div>
                    <div className="col-1 verticalclick" onClick={() => this.getteams(this.props.data.id)} data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <Link to={`/competition?id=${this.props.data.id}/teams`}>
                            <div><FontAwesomeIcon icon={faAngleRight} size="2x" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-12 hidden" id={this.props.data.id}>
                    {this.props.teamsdata.teamdata && this.props.teamsdata.teamslist.map((ele) => <div className="col-12"><Link to={`/teams/${ele.id}`}><div className="row teamlist"><div className="col-6 text-white"><h3>{ele.name}</h3></div><div className="col-6 text-right"><h3>{ele.tla}</h3></div></div></Link></div>)}
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        value: state.loginreducers,
        teamsdata: state.datareducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getteamlists: (id, data) => dispatch(getteamlists(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competitioncards)
