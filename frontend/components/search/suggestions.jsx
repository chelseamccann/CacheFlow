import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((r, idx) => (
    <li key={idx}>
      {r.symbol}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions