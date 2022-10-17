import React from 'react';
import { NavLink } from 'react-router-dom';
import BannerImage from '../asset/pizza.png';
// import '../styles/Home.css';


function Home() {
  return (
    <>
    <div className='home'style={{ backgroundImage : `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1> Pizzeria D'autrefois </h1>
        <p> Pizza au feu de bois</p>
        <NavLink to='/menu'>
          <button>Découvrire nos pizzas</button>
        </NavLink>
      </div>
    </div>
     <section className='section'>
     <div className='terrace'>
         <img src='./img/terrace.png' className='picture'></img>
        <img src='./img/wood-oven.png' className='picture'></img>
     </div>
     
     
   </section>
   </>
  );
}

export default Home;