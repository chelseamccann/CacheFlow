import React from 'react';

class Header extends React.Component {

    render(){
        const idxTab = this.props.indexTab;
        const headers = this.props.tabStuff.map((el, indx) => {
            const title = el.title;
            const toggleActive = indx === idxTab ? 'active' : '';
            return (
                <li 
                key = {indx}
                className = {toggleActive}
                onClick = {() => this.props.changeTab(indx)}>
                {title}{' '}
                </li>
            );
        });

        return (
            <ul className='tab-title'>
            {headers}
            </ul>
            );
    }
}

export default Header;