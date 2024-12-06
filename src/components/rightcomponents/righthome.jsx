import img1 from '../../assets/t8.png'
import img2 from '../../assets/t9.png'
import img3 from '../../assets/t10.png'
import img4 from '../../assets/t11.png'
import img5 from '../../assets/t4.png'
import img6 from '../../assets/t5.png'
import img7 from '../../assets/t6.png'
import img8 from '../../assets/t7.png'
import img9 from '../../assets/t.png'
import img10 from '../../assets/t1.png'
import img11 from '../../assets/t2.png'
import img12 from '../../assets/t3.png'
import p1 from '../../assets/1.png'
import p2 from '../../assets/2.png'
import p3 from '../../assets/3.png'
import p4 from '../../assets/4.png'
import p5 from '../../assets/5.png'
import p6 from '../../assets/6.png'
import verified from '../../assets/verified.png'
import './right.css'

const cards = [
    {id:1, thumbnail:img1, profile:p1, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:2, thumbnail:img2, profile:p2, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:3, thumbnail:img3, profile:p3, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:4, thumbnail:img4, profile:p4, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:5, thumbnail:img5, profile:p5, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:6, thumbnail:img6, profile:p6, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:7, thumbnail:img7, profile:p1, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:8, thumbnail:img8, profile:p2, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:9, thumbnail:img9, profile:p3, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:10, thumbnail:img10, profile:p4, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:11, thumbnail:img11, profile:p5, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
    {id:12, thumbnail:img12, profile:p6, title:"Bulbuli|coke studio Bangla|season one|Ritu Raj X Nandita", name:"Coke studio Bangla", img:verified, text:"1.5M views  2 days ago" },
]

function Home(){
    return (
        <>
        <div className="cards">
            {cards.map((x)=>(
                <div key={x.id} className="card">
                    <div className="thumbnail">
                        <img src={x.thumbnail} alt="" />
                    </div>
                    <div className="content">
                        <div className="profile">
                            <img src={x.profile} alt="" />
                        </div>
                        <div className="about">
                            <div className="title">{x.title}</div>
                            <div className="name">{x.name}
                                <img src={x.img} alt="" />
                            </div>
                            <div className="text">{x.text}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Home;