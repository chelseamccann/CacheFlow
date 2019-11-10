import React from 'react'

const Suggestions = (props) => {
  const len=props.inputText.length
  debugger
  const options = props.results.map((r, idx) => (
      <li className="each-search-result" key={idx}>
        {/* <p>{r.symbol}</p> */}
      <div className="text-results"><p className="color-text">{r.symbol.slice(0,len)}</p><p>{r.symbol.slice(len)}</p></div>
        <p>{r.securityName}</p>
      </li>

  ))
  return <ul className="search-results">{options}</ul>
}

export default Suggestions