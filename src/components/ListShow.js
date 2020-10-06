import React from 'react'
import './ListShow.css'

function ListShow(props) {
    const dataList = props.list
    const list = dataList.map(data => {
        if (data.user !== null) {
            return (
                <div className = "trending-body" key = {data.id}>
                                <div className = "general-info">
                                    <div className = "UserImage">
                                        {/* <img src = {data.user.avatar_url} className = "userImg" /> */}
                                    </div>
                                    <div className = "nameDesc">{data.username}</div>
                                    <div className = "dateAndTime">{data.import_datetime}</div>
                                    <div className = "message">{data.title}</div>
                                </div>
                                <div className = "image">
                                    <img src = {data.images.downsized.url} className = "gifImage" />    
                                </div> 
                            </div>
            )
        }
    })
    return (
    <div>{list}</div>
    )
}

export default ListShow
