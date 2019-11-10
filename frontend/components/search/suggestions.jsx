import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = (props) => {
  const len=props.inputText.length
  debugger
  const options = props.results.map((r, idx) => (

    <Link to={`/${r.symbol}`} style={{ textDecoration: 'none', color: 'black'}}>
      <li className="each-search-result" key={idx}>
      <div className="text-results">
        <p className="t color-text">{r.symbol.slice(0,len)}</p>
        <p className="t">{r.symbol.slice(len)}</p>
      </div>
        <p className="t">{r.securityName}</p>
      </li>
    </Link>

  ))
  return <ul className={`search-results ${`${props.clicked && props.results.length > 0 ? 'sr': ''}`}`}>{options}</ul>
}

export default Suggestions