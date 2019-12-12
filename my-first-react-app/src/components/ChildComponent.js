import React from 'react'

function ChildComponent(props) {

    //Destructing...
    const { greetHandler } = props;

    return (
        <div>
            {/* <button onClick={() =>props.greetHandler('child')}>Greet Parent</button> */}
            <button onClick={() => greetHandler('child..1')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
