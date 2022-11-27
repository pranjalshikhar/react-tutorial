import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>JSX Component</h1>
    //     </div>
    // )

    return React.createElement('div', 
        {id: 'hello', className: 'pranjal'}, 
        React.createElement('h1', 
            null, 
            'Hello from JSX'
    ));
}

export default Hello;