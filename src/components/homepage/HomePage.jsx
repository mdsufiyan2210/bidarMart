import React from 'react'
import './homePage.css'
import { useSelector } from "react-redux";

function HomePage() {
  const price = useSelector(state => state.priceAdded)

  return (
    <div>
      <h1>the price of your product is {price}</h1>
    </div>
  )
}

export default HomePage
