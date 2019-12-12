import React from 'react';  



export const Greet = (props) => {
return (
    <div  className="avengers">
    <h3>Hello {props.message} !</h3>
    <p>{props.children}</p>
    </div>
    )
} 
//export const Greet2 = () => <p>hello World2 !</p> 

export default Greet;
