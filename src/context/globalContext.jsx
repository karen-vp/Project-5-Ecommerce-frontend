import {useState, createContext} from 'react';
import clienteAxios from '../config/axios'

export const AppContext = createContext()

export const AppProvider=({children})=>{
    const [product, setProduct]=useState({})
    const [success, setSuccess] = useState(false)
    
    const getProduct = async () => {
        try {
          const res = await clienteAxios.get('/products/list')
            setProduct(res.data.Products)
            setSuccess(true)
                   
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
    }

console.log('Contexto', data)
return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}