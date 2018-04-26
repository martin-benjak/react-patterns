// We can import React in this way (default export), because we are going to create FUNCTIONAL COMPONENT
// Functional component can't work with states
import React from 'react';


// props are data pass into component from outside
const person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;