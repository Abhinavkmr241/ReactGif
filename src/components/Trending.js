import React, { Component } from 'react'
import {trending} from '../http/http-calls'
import ListShow from './ListShow'

class Trending extends Component {

    state = {
        data : []
    }

    componentDidMount() {
        const data = trending().then(resp => {
            this.setState({
                data : resp
            })
        }).catch(err => console.log(err))
    }

    render() {
        console.log(this.state.data)
        return (
            <ListShow list = {this.state.data} />
        )
    }
}

export default Trending
