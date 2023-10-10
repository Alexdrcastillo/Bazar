import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions'
import styles from "./recomended.module.css"
import { Link } from 'react-router-dom'

const Recomended = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.product).slice(0, 5)

    console.log(products)

    useEffect(() => {
      dispatch(getAllProduct())
    }, [])

  return (
    <div className={styles.cards}>{
        products.map(product => {
            return (
                <Link to={`/detail/${product.id}`}>                
                <div key={product.id} className={styles.card}>
                <img src={product.images[0]} alt="" />
                <h2>{product.brand}</h2>
                </div>
                </Link>
            )
        })
    }</div>
  )
}

export default Recomended