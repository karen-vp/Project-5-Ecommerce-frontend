
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Catalog from './components/pages/Catalog'
import Checkout from './components/pages/Checkout'
import NoPage from './components/pages/NoPage'
import Product from './components/shared/Product'
import PrivateRoute from './components/auth/PrivateRoute'

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/ecommerce-ropa-frontend' element={<Home/>}/>
          <Route path='/ecommerce-ropa-frontend/register' element={<Register/>}/>
          <Route path='/ecommerce-ropa-frontend/login' element={<Login/>}/>
          <Route path='/ecommerce-ropa-frontend/catalog' element={<Catalog/>}/>
          <Route path='/ecommerce-ropa-frontend/checkout' element={<Checkout/>}/>
          <Route path='/ecommerce-ropa-frontend/:id' element={<Product/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/ecommerce-ropa-frontend/profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<NoPage/>}/>

        </Routes>
      </Layout>
  );
}

export default App;
