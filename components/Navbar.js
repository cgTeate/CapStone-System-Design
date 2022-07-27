import React from 'react'
import requests from '../utils/requests'

export default function Navbar() {
  return (
    <div>
        {Object.entries(requests).map(([key,{title, url}])=>(
          <h1 key={key}>{title}</h1>
          ))}
    </div>
  )
}
