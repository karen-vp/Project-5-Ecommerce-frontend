import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from './../../context/cartProvider'

const ShowProducts = ({ products, isCatalog = false}) => {

    const checkoutCtx = useContext(CartContext)
    const { addItemToCart } = checkoutCtx


    return (
        products.map((item) => (
            <Card style={{ width: '18rem' }} key={item._id}>
                <Card.Img className='img-card' variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Marca: {item.brand}</ListGroup.Item>
                    <ListGroup.Item>${item.price}</ListGroup.Item>
                    {isCatalog && (
                        <Card.Body className='card-content'>
                            <Link to={`/${item._id}`}>Ver producto</Link>
                            <button className='btn-main' onClick={() => addItemToCart(item)}>Agregar al carrito</button>
                        </Card.Body>
                    )}
                </ListGroup>
            </Card>

        ))

    )
}
export default ShowProducts