import React, { Component } from 'react'
import {search} from '../http/http-calls'
import './Search.css'
import ListShow from './ListShow'

class Search extends Component {

    state = {
        searchItem : '',
         data : []
    }

    handleInput = (e) => {
        this.setState({
            searchItem : e.target.value
        })
    }
    
    searchGif = (e) => {
        e.preventDefault()
        const input = this.state.searchItem
        if (input.trim() !== '') {
            search(input).then(resp => {
                this.setState({
                    data : resp
                })
            }).catch(err => console.log(err))
        }
    }

    render() {
        return (
           <div>
               <form id = "searchForm" onSubmit = {this.searchGif}>
                   <input type = "text" placeholder = "Write something..." 
                        value = {this.state.searchItem} onChange = {this.handleInput}
                   />
                   <button type = "submit">Search</button>
               </form>
               <ListShow list = {this.state.data} />
           </div>
        )
    }
}

export default Search
