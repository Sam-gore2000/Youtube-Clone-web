import React from 'react'
import './Home.css'
import Sidebar from '../../Component/Sidebar'
import Feed from '../../Component/Feed'

function Home({sidebar}) {
  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'large-sidebar'} `}>
        <Feed/>
      </div>
          </div>
  )
}

export default Home
