import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import BurgerBlock from '../components/BurgerBlock';
import Skeleton from '../components/BurgerBlock/Skeleton';
import Pagination from '../components/Pagination';

export const Home = ({ searhValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: 'popularity',
    sortProperty: '0',
  });
  const [categoryId, setCategoryId] = React.useState(0);
  const [selectedPage, setSelectedPage] = React.useState(1);

  React.useEffect(() => {
    const sortBy = sortType.sortProperty;
    const order = sortBy !== 'title' ? '&order=desc' : '';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searh = searhValue !== undefined ? `&title=${searhValue}` : '';

    setIsLoading(true);
    fetch(
      `https://64b01903c60b8f941af538b8.mockapi.io/items?page=${selectedPage}&limit=4&${category}&sortBy=${sortBy}${order}${searh}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searhValue, selectedPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCtg={(id) => setCategoryId(id)} />
        <Sort type={sortType} setType={setSortType} />
      </div>
      <h2 className="content__title">All menu</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <BurgerBlock key={Object.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setSelectedPage(number)} />
    </div>
  );
};

export default Home;
