import './right.css'
import search from '../../assets/search.png'
import mic from '../../assets/mic.png'
import create from '../../assets/create.png'
import more from '../../assets/more.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/Ellipse 4-1.png'
function Search(){
    return(
        <div className="search">
            <div className="searchbar">
                <div className="bar">
                    <input type="text" placeholder='Search' className='upsearchbar'/>
                    <div className="searchimg">
                    <img src={search} alt="" />
                    </div>
                </div>
                <div className="mic">
                    <img src={mic} alt="" />
                </div>
            </div>
            <div className="uperprofile">
                <img src={create} alt="" />
                <img src={more} alt="" />
                <img src={bell} alt="" />
                <img src={profile} alt="" />
            </div>
        </div>
    )
}


export default Search;