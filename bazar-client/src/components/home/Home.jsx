import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from "./home.module.css"
import { Card } from 'antd';
import Searchbar from '../../views/Navbar/searchbar';
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
    <div >
<div style={{marginRight: "600px", height: "80px"}}>
      <Searchbar />
</div>

<div className={styles.container}>
        {
            products.map(product => {
                return (
           <Link to={`/detail/${product._id}`} >
            <Card
                 hoverable
                 className={styles.cardContainer} 
                cover={<img alt="product" style={{height: "150px", width: "200px", textAlign: "center", display: "flex"}} src={product.images[0]} />}
                 >
               <Meta title={product.brand} description={product.description} />
           </Card>
           </Link>       
                )
            })
        }
</div>
  

    </div>
  )
}

export default Home