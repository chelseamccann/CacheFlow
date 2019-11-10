import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((r, idx) => (
    
      <li className="each-search-result" key={idx}>
        <p>{r.symbol}</p>
        <p>{r.securityName}</p>
      </li>

  ))
  return <ul className="search-results">{options}</ul>
}

export default Suggestions