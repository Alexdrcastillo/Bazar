  import './App.css'
  import { Route, Routes } from "react-router-dom"
  import Landing from './components/landing/Landing'
  import { useEffect } from 'react'
  import { getAllProducts } from './redux/actions'
  import Home from './components/home/Home'

  function App() {


    return (
        <div>
            
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/products/:query" element={<Home />} />
        </Routes> 

        </div>
    )
  }

  export default App
