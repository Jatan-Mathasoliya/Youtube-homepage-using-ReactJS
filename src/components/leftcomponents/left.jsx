import logo from '../../assets/logo.png'
import ham from '../../assets/ham.png'
import './left.css'
import Lefttop from './lefttop'
import Leftmid from './leftmid'
import Leftbot from './leftbot'

function Left() {
    return (
        <>
            <div className="left">

                <div className="toplogo">
                    <div className="ham">
                        <img src={ham} alt="" />
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <Lefttop />
                <div className="seprat"></div>
                <Leftmid/>
                <div className="seprat1"></div>
                <div className="leftendheading">SUBSCRIPTION</div>
                <Leftbot/>
            </div>
        </>
    )
}

export default Left;