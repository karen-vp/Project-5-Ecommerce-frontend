import { useState, createContext } from 'react';
import clienteAxios from '../config/axios'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [product, setProduct] = useState()
  const [success, setSuccess] = useState(false)
  const [ok, setOk] = useState(false)
  const [oneProduct, setOneProduct] = useState({})

  const [cart, setCart]= useState([])

  const addItemToCart = (product)=>{
    !product.quantity && (product.quantity=1)
    const productInCart = cart.find((item)=> item.id === product.id);
    console.log('SE ENCONTRO EL PRODUCTO EN EL CARRITO',productInCart)
    if(productInCart){
      const newCart = cart.map((item)=>{
        if(item.id === product.id){
          return{
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
      setCart(newCart);
      return;
    }
    setCart([...cart, product]);
  }

  const getProduct = async () => {
    try {
      const res = await clienteAxios.get('/products/list')
      setProduct(res.data.Products)
      setSuccess(true)

    } catch (error) {
      console.log(error)
    }
  }

  const getId = async (customerId) => {
    try {
      const res = await clienteAxios.get(`/products/list/${customerId}`)
      setOneProduct(res.data)
      setOk(true)
    } catch (error) {
      console.log(error)
    }
  }


  const data = {
    product,
    setProduct,
    getProduct,
    success,
    setSuccess,
    getId,
    oneProduct,
    setOneProduct,
    ok, 
    setOk,
    cart, 
    setCart,
    cart,
    setCart,
    addItemToCart

  }

  console.log('Contexto', data)
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}