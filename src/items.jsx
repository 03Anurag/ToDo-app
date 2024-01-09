import React from 'react'

function ToDo(props){
    return (
        <li onClick={()=>{props.onChecked(props.id)}}>{props.text}</li>
    ) 
}

export default ToDo;