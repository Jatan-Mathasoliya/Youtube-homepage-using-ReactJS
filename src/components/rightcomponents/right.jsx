import React from 'react';

import './right.css'
import Search from './rightsearch'
import Explore from './rightexplore';
import Home from './righthome';
function Right(){
    return(
        <>
        <div className="right">
        {/* <Search/> */}
        <div className="seprat2"></div>
        <Explore/>
        <div className="seprat2"></div>
        <Home/>
        </div>
        </>
    )
}

export default Right;