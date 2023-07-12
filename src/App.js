import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BurgerBlock from './components/BurgerBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All menu</h2>
          <div className="content__items">
            <BurgerBlock title="Burger" price="5.10" />
            <BurgerBlock title="Double-Burger" price="11" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
