    import axios from 'axios';
    import React, { useEffect, useState } from 'react';
    import { Link, useParams } from 'react-router-dom';
    import styles from './detail.module.css';
    import { Carousel } from 'react-responsive-carousel';
    import 'react-responsive-carousel/lib/styles/carousel.min.css';

    const Detail = () => {
    const [product, setProduct] = useState([]);
    const [images, setImages] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/product/${id}`);
            setProduct([response.data]);
            setImages(response.data.images);
        } catch (error) {
            console.error('Error fetching product data', error);
        }
        };
        fetchData();
    }, [id]);

    return (
        <div>
        <Link to="/">Home</Link>
        {product.map((product) => (
            <div className={styles.card} key={product._id}>
            <Carousel>
                {images.map((imgSrc, index) => (
                <div key={index}>
                    <img style={{width: "300px", height: "250px"}} src={imgSrc} alt={`Image ${index}`} />
                </div>
                ))}
            </Carousel>
            <div className={styles.text}>
                <h2>{product.description}</h2>
                <h1>{product.price}</h1>
                <h2>{product.brand}</h2>
                <h2>{product.stock}</h2>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default Detail;
