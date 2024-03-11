import React from 'react'
import './Home.css'
import Sidebar from '../../Component/Sidebar'

function Home({sidebar}) {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default Home
