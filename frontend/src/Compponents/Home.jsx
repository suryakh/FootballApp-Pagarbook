import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        console.log(this.props.value)
        return (
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        value: state.loginreducers  
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
