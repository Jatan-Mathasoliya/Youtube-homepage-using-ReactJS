import library from '../../assets/library.png'
import his from '../../assets/history.png'
import yv from '../../assets/yv.png'
import wl from '../../assets/wl.png'
import liked from '../../assets/liked.png'
import show from '../../assets/show.png'
import './left.css'
const leftmid = [
    {id:1, img:library, text:"Library"},
    {id:2, img:his, text:"History"},
    {id:3, img:yv, text:"Your Videos"},
    {id:4, img:wl, text:"Watch Later"},
    {id:5, img:liked, text:"Liked videos"},
    {id:6, img:show, text:"Show more"},
]

function Leftmid(){
    return(
        <div className="midleft">
            {leftmid.map((x)=>(
                <div className="leftrow">
                    <div className="leftimg">
                        <img src={x.img} alt="x.text" />
                    </div>
                    <div className="lefttext">
                        {x.text}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Leftmid;