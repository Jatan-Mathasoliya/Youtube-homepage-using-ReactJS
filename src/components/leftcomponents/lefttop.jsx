import home from '../../assets/home.png'
import exp from '../../assets/explore.png'
import shorts from '../../assets/shorts.png'
import sub from '../../assets/sub.png'

const lefttop = [
    {id:1, img:home, text:"Home"},
    {id:2, img:exp, text:"Explores"},
    {id:3, img:shorts, text:"Shorts"},
    {id:4, img:sub, text:"Subscription"}
]

function Lefttop(){
    return(
        <div className="topleft">
            {lefttop.map((a)=>(
                <div key={a.id} className="leftrow">
                    <div className="leftimg">
                        <img src={a.img} alt={a.text} />
                    </div>
                    <div className="lefttext">
                        {a.text}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Lefttop;