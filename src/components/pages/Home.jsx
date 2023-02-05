import React from 'react'
import Categories from '../shared/Categories'
import Jumbotron from '../shared/Jumbotron'
import Sales from '../shared/Sales'


function Home() {
  return (
    <div>
      <Jumbotron/>
      <Categories/>
      <Sales/>
    </div>
  )
}

export default Home