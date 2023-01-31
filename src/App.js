
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
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/:id' element={<Product/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<NoPage/>}/>

        </Routes>
      </Layout>
  );
}

export default App;
