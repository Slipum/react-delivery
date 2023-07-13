import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BurgerBlock from './components/BurgerBlock';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64b01903c60b8f941af538b8.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

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
            {items.map((obj) => (
              <BurgerBlock
                key={obj.id}
                {...obj}
                //     title={obj.title}
                //     price={obj.price}
                //     imageUrl={obj.imageUrl}
                //     selection={obj.selection}
                //     types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
