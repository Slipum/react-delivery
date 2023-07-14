import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import BurgerBlock from '../components/BurgerBlock';
import Skeleton from '../components/BurgerBlock/Skeleton';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://64b01903c60b8f941af538b8.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All menu</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <BurgerBlock key={Object.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
