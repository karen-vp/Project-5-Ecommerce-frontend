import {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([])
    const addItemToCart = (product)=>{
        !product.quantity && (product.quantity=1)
        const productInCart = cart.find((item)=> item._id === product._id);
        if(productInCart){
          const newCart = cart.map((item)=>{
            if(item._id === product._id){
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
        // localStorage.getItem('products')
        // localStorage.setItem('products',JSON.stringify(cart))
      }
    const data = {
        cart,
        setCart,
        addItemToCart
    }

        return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
