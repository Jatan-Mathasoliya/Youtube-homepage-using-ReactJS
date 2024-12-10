import React, { useState } from 'react';

    const Display = ()=>{
        const [isLogedin, setLogin] = useState(false);
        
        const toggle = ()=>{
        setLogin(!isLogedin);
    };
         
        const[count, logic] = useState(0);

        const countnum = () => {
            logic(count + 1);
        }
        const decri = () =>{
            logic(count - 1);
        }

    return(
        <>
        <a href="http://localhost:5173/" target='_blank'>
        <button onClick={toggle}>
        {isLogedin ? 'Logout' : 'Login'}
        </button>
        </a>
        <p>
            {isLogedin ? 'Click button to enter my YouTube' : 'You are not logged in'}
        </p>

        <button onClick={countnum}>
            +
        </button>
        <p>{count}</p>
        <button onClick={decri}>
            -
        </button>
        </>
    )
}

export default Display;