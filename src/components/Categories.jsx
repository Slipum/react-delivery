import React from "react";

function Categories() {
	const [active, setActive] = React.useState(0);

	const categories = [
		'All', 
		'Burgers', 
		'Pizzas',
		'Drinks',
		'Sauces',
		'Snacks',
	]

	const onClickCtg = (index) => {
		setActive(index)
		//If you need additional methods use this way of declaring the state,
		//and if you need only one method, see how it is done in the BurgerBlock.jsx file
	}

	return (
	  <div className="categories">
		<ul>
		  {
			categories.map((value, i) => <li key={i} onClick={() => onClickCtg(i)} className={active === i ? "active" : ""}>
				{value}
			</li>
			)
		  }
		</ul>
	  </div>
	);
  }

  export default Categories