import React from 'react';

class Header extends React.Component {

    render(){
        const idxTab = this.props.indexTab;
        const headers = this.props.tabStuff.map((el, indx) => {
            const title = el.title;
            const toggleActive = indx === idxTab ? 'bsactive' : '';
            const tabColor = indx === idxTab ? `${this.props.colorClass}tab` : `${this.props.colorClass}hover`
            return (
                <li 
                key = {indx}
                // className = {`${toggleActive}`}
                className = {`${tabColor}`}
                onClick = {() => this.props.changeTab(indx)}>
                {title}{' '}
                </li>
            );
        });

        return (
            <ul className={`tab-title ${this.props.colorClass}hover`}>
            {headers}
            </ul>
            );
    }
}

export default Header;