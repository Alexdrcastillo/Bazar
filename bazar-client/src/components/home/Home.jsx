import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./home.module.css"
import { Card } from 'antd';
const { Meta } = Card;

const Home = () => {

    const { query } = useParams()

    const [products, setProducts] = useState([])
         
    useEffect(() => {
         const api = async () => {
            const product = await axios.get(`http://localhost:4000/search/?search=${query}`)
            setProducts(product.data)
         }
         api()
    }, [])


    console.log(products)

  return (
    <div className={styles.container}>
        {
            products.map(product => {
                return (
            <Card
                 hoverable
                 style={{
                  width: 240,
                  margin: 30,
                  textAlign: 'center'
                 }}
                cover={<img alt="product" style={{height: "150px", width: "200px", textAlign: "center"}} src={product.images[0]} />}
                 >
               <Meta title={product.brand} description={product.description} />
           </Card>
                )
            })
        }
    </div>
  )
}

export default Home