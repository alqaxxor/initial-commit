import React from 'react';
import './App.css';
import { Context } from './Context/Theme'

import { Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Profile from './Pages/Profile/Profile'




function App () {

  const { theme } = React.useContext(Context)
  
  return (
    <>
  <Header />

<main className={theme == 'light' ? 'light' : 'dark'}>
      
   <Routes>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Profile' element={<Profile />} />


    </Routes>

   
   </main>
    <Footer />

    </>

    )

  
}
export default App;
    
    
    