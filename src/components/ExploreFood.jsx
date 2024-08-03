import React from 'react'
import Pizza from '../assets/pizza.jpeg'
import Fries from '../assets/fries.jpeg'
import Burger from '../assets/burger.jpeg'
import './ExploreFoods.css'

function ExploreFood() {
  return (
    <div className='explore-foods'>
      <h2>Explore Foods</h2>
      <div className='categories'>
      <div className='category'>
        <img src={Pizza}></img>
        <h3>Pizza</h3>
      </div>
      <div className='category'>
        <img src={Fries}></img>
        <h3>Fries</h3>
      </div>
      <div className='category'>
        <img src={Burger}></img>
        <h3>Burger</h3>
      </div>
      </div>
    </div>
  )
}

export default ExploreFood
