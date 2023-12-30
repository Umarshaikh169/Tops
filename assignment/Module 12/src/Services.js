import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function Services () {
  return (
    <div>

        <Link to="Services/Service1">Service1</Link>
        <Link to="Services/Service2">Service2</Link>
        <Outlet/>
    </div>
  )
}
