import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from './../../context/globalContext'

function Product() {
  const { getId, oneProduct, setOneProduct, ok } = useContext(AppContext)

  const { id } = useParams()
  console.log(`Parametros: ${id}`)

  useEffect(() => {

    getId(id)
  }, [])

  console.log(oneProduct)
  console.log(ok)
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
              <div id={key}>
                <h3>{value.name}</h3>
                <p>{value.description}</p>
                <p>Marca: {value.brand}</p>
                <h3>${value.price}</h3>
                <button className='btn-main'>Agregar al carrito</button>
              </div>
            ))) : null}

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Product