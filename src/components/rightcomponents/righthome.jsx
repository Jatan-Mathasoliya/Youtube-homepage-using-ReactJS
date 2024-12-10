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


import React, { useEffect, useState } from "react";
import "./right.css";
import searchIcon from "../../assets/search.png";
import micIcon from "../../assets/mic.png";
import createIcon from "../../assets/create.png";
import moreIcon from "../../assets/more.png";
import bellIcon from "../../assets/bell.png";
import profileIcon from "../../assets/Ellipse 4-1.png";

function Search() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // For storing search input
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyCYRT2zdQXerAHeywFTSJcNOCQxJYHFEr0"; // Replace with your actual API key

  const fetchVideos = async (query) => {
    setLoading(true);

    try {
      const endpoint = query
        ? `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
        : `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`;

      const response = await fetch(endpoint);
      const data = await response.json();

      const transformedData = data.items.map((item) => ({
        id: item.id.videoId || item.id, // Handle both "search" and "videos" responses
        thumb: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
      }));

      setVideos(transformedData);
    } catch (error) {
      console.error("Error fetching videos: ", error);
    }

    setLoading(false);
  };

  // Fetch popular videos on load
  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchVideos(searchQuery);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="search">
        <div className="searchbar">
          <form className="bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="upsearchbar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="searchimg">
              <img src={searchIcon} alt="Search" />
            </button>
          </form>
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

      {/* Video List */}
      {loading ? (
        <p>Loading videos...</p>
      ) : (
        <div className="cards">
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
      )}
    </div>
  );
}

export default Search;
