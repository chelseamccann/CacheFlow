import React from 'react'; 
import { fetchIPOs } from '../../util/ipo_api_util';

class IPO extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        fetchIPOs().then(ipos => {
            this.setState({ ipos: ipos.rawData, isLoading: false })
        })
    }

    render(){

        if (!this.state.isLoading){

            const ipos = this.state.ipos.slice(0,4)

            return (
                <>
                <div className="ipos">
                    <p className="ipo-title">Upcoming IPOs</p>
                <ul className="ipo-list" >
                    {ipos.map((ipo, idx) => (

                        <li className="ipo-info" key={`${ipo.symbol}-${idx}`}>
                            <div className="ipo ipo-name">{ipo.companyName}</div> 
                            
                            <div className="ipo">
                                <div className="ipo-date">{ipo.symbol}</div> 
                                <div className="ipo-date">{ipo.expectedDate}</div> 
                            </div>
                        </li>

                    ))}
                </ul>
                </div>
                </>
            )
        } else{
            return <div></div>
        }
    }
}

export default IPO;
