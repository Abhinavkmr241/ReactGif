import React, { Component } from 'react'
import './Upload.css'
import {uploadFile} from '../http/http-calls'
import {Redirect} from 'react-router-dom'

export class Upload extends Component {

    state = {
        selectedFile : null,
        id : '',
        redirect : false
    }

    inputFileHandler = (e) => {
        this.setState({
            selectedFile : e.target.files[0]
        })
    }

    uploadFileHandler = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('file', this.state.selectedFile)
        uploadFile(fd).then(resp => {
            this.setState({
                id : resp.data.id,
                redirect : true
            })
        }).catch(err => console.log(err))
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to = {{
                    pathname : '/preview',
                    state : this.state.id
                }}/>
            )
        }
        return (
            <div>
                <form id = "uploadForm" onSubmit = {this.uploadFileHandler}>
                    <input type = "file" onChange = {this.inputFileHandler} />
                    <button type = "submit">Upload</button>
                </form>
            </div>
        )
    }
}

export default Upload
