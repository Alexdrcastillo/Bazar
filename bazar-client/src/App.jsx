  import './App.css'
  import { Route, Routes } from "react-router-dom"
  import Landing from './components/landing/Landing'
  import { useEffect } from 'react'
  import { getAllProducts } from './redux/actions'
  import Home from './components/home/Home'
import Detail from './views/detail/Detail'
import Form from './views/form/Form'

  function App() {


    return (
        <div>
            
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/products/:query" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/sell' element={<Form />} />
        </Routes> 

        </div>
    )
  }

  export default App
