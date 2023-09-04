import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Authentication/Signup'
import Login from './Pages/Authentication/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Restlogin from './Pages/Authentication/Admin/RestLogin';
import RestSignup from './Pages/Authentication/Admin/RestSignup';
import RestProfile from './Pages/RestProfile/RestProfile';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useGlobalContext } from './Context/Context';
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage';



function App() {

   const {account, setAccount} = useGlobalContext();
   const{partner,setPartner} = useGlobalContext();
   const [isAuthenticated, isUserAuthenticated] = useState(false)
   
   useEffect(()=>{
    const name= localStorage.getItem('name') 
    if(name)
    {
      setAccount(name)
    }
   },[name])
   useEffect(()=>{
    const name= localStorage.getItem('username')
    if(name){
      setPartner(name)
    }
   },[name])

  return (
  <BrowserRouter>
         <ToastContainer position="top-center"
                         autoClose={2000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="light"/>
         <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/login' element={<Login/>}/>
             <Route path='/Signup' element={<Signup/>}/>
             <Route path='/Restlogin' element={<Restlogin/>}/>
             <Route path='/RestSignup'element={<RestSignup/>}/>
             <Route path='/RestProfile' element={<RestProfile/>}/>
             <Route path='/Restaurant/:id' element={<RestaurantPage/>}/>

         </Routes>
  </BrowserRouter>
  )
}

export default App
