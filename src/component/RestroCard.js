
import{CDN_URL} from "../utils/constants"
const RestroCard=(props)=>{
    const {resData} = props ;
    const info = resData.info ;
    const{name,cuisines,avgRating}= info ;


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

// higher order component 
// input - restroCard => restroCardPromoted

export const withPromotedLabel = (RestroCard) =>{
    return (props) =>{
        return (
            <div>
                <label>
                    PROMOTED !
                </label>
                <RestroCard {...props} />
            </div>
        );
    };
};

export default RestroCard;