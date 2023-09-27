import React, { useEffect } from 'react'
import SearchBar from '../../views/Navbar/searchbar'
import style from "./landing.module.css"
import { getAllProducts } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../home/Home'

const Landing = () => {

  const state = useSelector(state => state.products)


  const dispatch = useDispatch()

  console.log(state)

  

  return (
    <div className={style.container}>

    <SearchBar /> 



   </div>
  )
}

export default Landing