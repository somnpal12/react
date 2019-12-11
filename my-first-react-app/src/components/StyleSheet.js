import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    let myClassName = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${myClassName} fontAlign`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
