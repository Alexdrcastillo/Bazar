import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requiere importar los estilos del carrusel
import SearchBar from '../../views/Navbar/searchbar';
import style from "./landing.module.css";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Recomended from '../recomended/Recomended';

const Landing = () => {
  return (
    <div className={style.container}>
      <Link to="/sell" style={{marginLeft: "50vh", zIndex: 2}}>
        <Button>Vender</Button>
      </Link>
      <SearchBar /> 
      <div className={style.carrusel}>
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1696529536654-home-slidercyberweek-autorepuestos.jpg" />
          </div>
        <img src="https://http2.mlstatic.com/D_NQ_779036-MLA72125584793_102023-OO.webp" alt="" />
        <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1696458381590-home-sliderdesktop-ipvc.jpg" />
        </Carousel>
      </div>
        <h1>Recomended</h1>
      <Recomended /> 
    </div>
  );
}

export default Landing;