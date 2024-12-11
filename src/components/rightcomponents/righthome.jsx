// import React,{useEffect, useState} from "react";
// import './right.css'
// function Home(){

//     const [videos, setvideo] = useState([])

// useEffect(()=>{
//     fetch('https://youtube-clone-server-c4gs.onrender.com/videos')
//     .then((response)=>response.json())
//     .then((data)=>{
//         setvideo(data)
//     })
// },[])

//     return (
//         <>
//         <div className="cards">
//             {videos.map((x)=>(
//                 <div className="video" key={x.id}>
//                     <div className="thumbnail">
//                         <img src={`https://youtube-clone-server-c4gs.onrender.com${x.thumb}`} alt="" />
//                     </div>
//                     <div className="content">
//                         <div className="profile">
//                             <img src={`https://youtube-clone-server-c4gs.onrender.com${x.profile}`} alt="" />
//                         </div>
//                         <div className="about">
//                             <div className="title">{x.title}</div>
//                             <div className="name">{x.name}
//                                 <img src={`hhttps://youtube-clone-server-c4gs.onrender.com${x.img}`} alt="" />
//                             </div>
//                             <div className="text">{x.text}</div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </>
//     )
// }
// export default Home;

import React, { useState, useEffect } from "react";
import micIcon from "../../assets/mic.png";
import createIcon from "../../assets/create.png";
import moreIcon from "../../assets/more.png";
import bellIcon from "../../assets/bell.png";
import profileIcon from "../../assets/Ellipse 4-1.png";
import "./right.css";

function RightMain() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("codinggita");
  const [videos, setVideos] = useState([]);

  const API_KEY = "AIzaSyCYRT2zdQXerAHeywFTSJcNOCQxJYHFEr0"; // Replace with environment variable
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=20&key=${API_KEY}`;

  const fetchVideos = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const cardData = data.items.map((item) => ({
          id: item.id.videoId || item.id,
          thumb: item.snippet.thumbnails.high.url,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
        }));
        setVideos(cardData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (search) {
      fetchVideos();
    }
  }, [search]);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="search">
        <div className="searchbar">
          
            <input
              type="text"
              placeholder="Search"
              className="upsearchbar"
              value={input}
              onChange={handleSearch}
            />
            <button type="submit" onClick={handleClick}>Search</button>
        
          <div className="mic">
            <img src={micIcon} alt="Mic" />
          </div>
        </div>
        <div className="uperprofile">
          <img src={createIcon} alt="Create" />
          <img src={moreIcon} alt="More" />
          <img src={bellIcon} alt="Bell" />
          <img src={profileIcon} alt="Profile" />
        </div>
      </div>

      {/* Video Cards */}
      <div className="video_page">
        {videos.map((video) => (
          <div className="video" key={video.id}>
            <div className="thumbnail">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className="content">
              <div className="title">{video.title}</div>
              <div className="channel">{video.channel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightMain;
