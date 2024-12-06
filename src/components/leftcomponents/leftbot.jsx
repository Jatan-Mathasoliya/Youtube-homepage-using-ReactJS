import e1 from '../../assets/e1.png'
import e2 from '../../assets/e1-1.png'
import e3 from '../../assets/e1-2.png'
import e4 from '../../assets/e1-3.png'
import e5 from '../../assets/e1-4.png'
import './left.css'

const leftbot = [
    {id:1, img:e1, text:"Nadir on the go"},
    {id:2, img:e2, text:"Coke Studio Bangla"},
    {id:3, img:e3, text:"MKBHD"},
    {id:4, img:e4, text:"Figma"},
    {id:5, img:e5, text:"ATC android to to"},
]

function Leftbot(){
    return(
        <div className="leftbot">
            {leftbot.map((x)=>(
                <div key={x.id} className='leftrow'>
                    <div className="leftimg">
                        <img src={x.img} alt={x.text} />
                    </div>
                    <div className="lefttext">
                        {x.text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leftbot;