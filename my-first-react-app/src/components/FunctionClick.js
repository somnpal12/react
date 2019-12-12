import React from 'react'
import Button from '@material-ui/core/Button';

function FunctionClick() {
    return (
        <div>
            <button variant="contained" color="primary" onClick={clickHandler}>Click</button>
        </div>
    )

    function clickHandler(){
        console.log("Button Clicked !")
    }
}



export default FunctionClick
