import React,{useEffect, useState} from "react";
import './right.css'
function Home(){

    const [videos, setvideo] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/videos')
    .then((response)=>response.json())
    .then((data)=>{
        setvideo(data)
    })
},[])

    return (
        <>
        <div className="cards">
            {videos.map((x)=>(
                <div className="video" key={x.id}>
                    <div className="thumbnail">
                        <img src={`http://localhost:3000${x.thumb}`} alt="" />
                    </div>
                    <div className="content">
                        <div className="profile">
                            <img src={`http://localhost:3000${x.profile}`} alt="" />
                        </div>
                        <div className="about">
                            <div className="title">{x.title}</div>
                            <div className="name">{x.name}
                                <img src={`http://localhost:3000${x.img}`} alt="" />
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