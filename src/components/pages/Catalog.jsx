import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from './../../context/globalContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Catalog() {
  const { product, getProduct, success } = useContext(AppContext)

  useEffect(() => {
    getProduct()
  }, [])
  console.log('front product')
  console.log(product)
  return (
    <div>
      {success ? (
        product.map((item, i) => {
          return (<ul>
            <li key={item.name}>{item.name}</li>
            <li key={item.img}><img src={item.img}></img></li>
            <li key={item.brand}>{item.brand}</li>
            <li key={item.description}>{item.description}</li>
            <li key={item.price}>{item.price}</li>
          </ul>)
        }))
      : null}
    </div>
  )
}

export default Catalog