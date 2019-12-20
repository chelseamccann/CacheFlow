import React from 'react'; 
import { fetchIPOs } from '../../util/ipo_api_util';

class Ratings extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const buyPercent = `${(Math.round((Math.round(this.props.buyRating) / Math.round(this.props.netRatings)) *1e2)/1e2 *100).toFixed(0)}%`
        const holdPercent = `${(Math.round((Math.round(this.props.holdRating) / Math.round(this.props.netRatings)) *1e2)/1e2 *100).toFixed(0)}%`
        const sellPercent = `${(Math.round((Math.round(this.props.sellRating) / Math.round(this.props.netRatings)) *1e2)/1e2 *100).toFixed(0)}%`

        if (!this.props.isLoading && (buyPercent || holdPercent || sellPercent)){
            
            return (
                <>
                <p className="ipo-title a-title">Analyst Ratings</p>
                <div className="ratings">
                    <div className={`rating-bubble ${this.props.colorClass}-bubble`}>
                        <p className={`rating-bubble-number ${this.props.colorClass}-text`}>{`${this.props.ratingNumber.toFixed(0)}%`}</p>
                        <p className={`rating-text ${this.props.colorClass}-text`}>{`of ${this.props.netRatings} ratings`}</p>
                    </div>

                <div className="lines">

                    <div className="buy" >
                        <p style={{width: buyPercent}} className={`p p-buy ${this.props.colorClass}-buy`}><p className="rb-text">Buy</p></p>
                        <div>

                        <div className="line" ></div>
                        
                        <div className="n">{buyPercent}</div>
                        </div>
                    </div>

                    <div className="hold">
                        <p style={{width: holdPercent}} className="p p-hold"><p className="rh-text">Hold</p></p>
                        <div>
                        <div className="line"></div>

                        
                        <div className="n">{holdPercent}</div>

                        </div>
                    </div>

                    <div className="sell">
                        <p style={{width: sellPercent}} className="p p-sell"><p className="rs-text">Sell</p></p>
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
