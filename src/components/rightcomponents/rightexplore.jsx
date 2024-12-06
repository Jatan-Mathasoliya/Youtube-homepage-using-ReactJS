import arrow from '../../assets/arrow.png'

let data = [
    {id:1, text:"All"},
    {id:2, text:"coke studio"},
    {id:3, text:"UX"},
    {id:4, text:"Case study"},
    {id:5, text:"Music"},
    {id:6, text:"Bangla lofi"},
    {id:7, text:"Tour"},
    {id:8, text:"Santmartin"},
    {id:9, text:"Tech"},
    {id:10, text:"iPhone13"},
    {id:11, text:"UI desings"},
    {id:12, text:"Computers"},
]
function Explore(){
    return(
        <>
        <div className="explore">
            {data.map((x)=>(
                <div key={x.id} className="exp">
                    {x.text}
                </div>
            ))}
            <div className="arrow">
                <img src={arrow} alt="" />
            </div>
        </div>
        </>
    )
}

export default Explore;