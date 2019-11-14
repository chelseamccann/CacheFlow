import React from 'react'; 
import { fetchIPOs } from '../../util/ipo_api_util';

class Ratings extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){

        const buyPercent = `${Math.round((this.props.buyRating / this.props.netRatings) *1e2)/1e2 *100}%`
        const holdPercent = `${Math.round((this.props.holdRating / this.props.netRatings) *1e2)/1e2 *100}%`
        const sellPercent = `${Math.round((this.props.sellRating / this.props.netRatings) *1e2)/1e2 *100}%`
        if (!this.props.isLoading){

            return (
                <>
                <p className="ipo-title">Analyst Ratings</p>
                <div className="ratings">
                    <div className="rating-bubble">
                        <p className="rating-bubble-number">{`${this.props.ratingNumber}%`}</p>
                        <p className="rating-text">{`of ${this.props.netRatings} ratings`}</p>
                    </div>

                <div className="lines">

                    <div className="buy" >
                        <p style={{width: buyPercent, backgroudColor: "#21ce99"}} className="p">Buy</p>
                        <div>

                        <div className="line" ></div>
                        
                        <div className="n">{buyPercent}</div>
                        </div>
                    </div>

                    <div className="hold">
                        <p className="p">Hold</p>
                        <div>
                        <div className="line"></div>

                        
                        <div className="n">{holdPercent}</div>

                        </div>
                    </div>

                    <div className="sell">
                        <p className="p">Sell</p>
                        <div className="line"></div>

                        <div className="n">{sellPercent}</div>
                    </div>
                </div>
                </div>
                </>
            )
        } else{
            return <div></div>
        }
    }
}

export default Ratings;
