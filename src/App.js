import React, { useState } from 'react';

import './App.css';
import Category from './Category';
import Menu from './Menu';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <menu>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu</h2>
          <div className='underline'></div>
        </div>
        <Category filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </menu>
  );
}

export default App;
