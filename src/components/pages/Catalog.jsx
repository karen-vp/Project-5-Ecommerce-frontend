import React, { useContext, useState, useEffect } from 'react'
import '../../App.css';
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
    <>
      <h2 className='page-subtitle'>Nuestros Productos</h2>
      <p className='page-subtitle'>Entre nuestras colecciones encontrarás desde los estilos más sofisticados hasta los más urbanos.</p>

      <div className='product-container'>

        {success ? (
          product.map((item, i) => {
            return (<Card style={{ width: '18rem' }}>
              <Card.Img  variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <ListGroup classname="list-group-flush">
                <ListGroup.Item>Marca: {item.brand}</ListGroup.Item>
                <ListGroup.Item>${item.price}</ListGroup.Item>
              </ListGroup>
            </Card>
            )
          }))
          : null}
      </div>
    </>
  )
}

export default Catalog