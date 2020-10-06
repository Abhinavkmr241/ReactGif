import React from 'react'
import {previewFile} from '../http/http-calls'

function Preview(props) {
    const id = props.location.state
    previewFile(id).then(resp => console.log(resp))
    return (
        <div>
            <h1>Preview Page</h1>
        </div>
    )
}

export default Preview

