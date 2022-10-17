import React from 'react';
import MenuItem from '../component/MenuItems';
import { MenuList } from '../helpers/MenuList';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Découvrez nos Pizzas</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;