
import{CDN_URL} from "../utils/constants"
const RestroCard=(props)=>{
    const {resData} = props ;
    const{info} = resData.card.card ;
    const{name, cuisines,avgRating}= info ;


    return (
        <div className="res-card">
            <img className="res-logo"
            alt="res-logo"
           src={CDN_URL + info.cloudinaryImageId}/>
            <h3> {name} </h3>
            <h4> {cuisines.join(", ")} </h4>
            <h4>{avgRating}</h4>

        </div>
    );
}

export default RestroCard;