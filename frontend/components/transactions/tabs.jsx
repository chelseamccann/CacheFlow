import React from 'react';
import Header from './header.jsx'

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indexTab: 0,
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(idx){
        this.setState({indexTab: idx});
    }

    render(){
        const currentTab = this.props.tabStuff[this.state.indexTab];

        return (
        <div className='tabs'>
            <ul className='tab-box'>
                <Header tabStuff={this.props.tabStuff} changeTab={this.changeTab} indexTab={this.state.indexTab}/>
                <div className='tab-content'>    
                    <article>
                    {currentTab.content}
                    </article>
                </div>
            </ul>
        </div>
        )
    }
}

export default Tabs;