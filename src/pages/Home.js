import React from 'react'
import Trending from "../components/Trending"
import Topnews from "../components/Topnews"
import "../styles/home.css"




function Home() {
  return (
    <div className='home-container'>

    <div className='trending-articles'>
      <Topnews/>
      <Trending/>
    </div>
       
    </div>
  )
}

export default Home