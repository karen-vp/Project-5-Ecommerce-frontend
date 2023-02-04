import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from './../../context/globalContext'
import { CartContext } from './../../context/cartProvider'


function Product() {

  const checkoutCtx = useContext(CartContext)
  const { cart, addItemToCart } = checkoutCtx

  const productCtx = useContext(AppContext)
  const { getId, ok, oneProduct } = productCtx

  const {id} = useParams()

  useEffect(() => {
    getId(id)
  }, [cart])


  return (
      <div className="default-container">
        <Container fluid="md" >
          <Row className="justify-content-md-center">
            <Col sm={6}>{
              ok ? (<img src={oneProduct.singleProduct.img} className="img-fluid" alt={oneProduct.singleProduct.name} />)
                : null}

          </Col>
          <Col sm="auto">
            {ok ? (Object.entries(oneProduct).map(([key, value]) => (
              <div key={value._id}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
                <p>Marca: {value.brand}</p>
                <h3>${value.price}</h3>
                <button className='btn-main' onClick={() => addItemToCart(value)}>Agregar al carrito</button>
              </div>
            ))) : null}
          </Col>
        </Row>
      </Container>
    </div>)

}

export default Product