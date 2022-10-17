import React from 'react';
import tomatoSauce from '../asset/tomato-sauce.png';


function About() {
  return (
    <div className='about'>
      <div
        className='aboutTop'
        style={{ backgroundImage: `url(${tomatoSauce})` }}
       
      ></div>
      <div className='aboutBottom'>
        <h1>Nous découvrir</h1>
        <p>
          The most popular cheeses to use on pizza are mozzarella, provolone,
          cheddar and parmesan. Romano and Ricotta are often used as toppings
          and processed cheese manufactured specifically for pizza is used in
          mass-produced environments. Pizza can be baked in an oven with stone
          bricks above the heat source, an electric deck oven, a conveyor belt
          oven or, in the case of more expensive restaurants, a wood- or
          coal-fired brick oven.
        </p>
      </div>
    </div>
  );
}

export default About;