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
	}

	return (
	  <div className="categories">
		<ul>
		  {
			categories.map((value, i) => <li onClick={() => onClickCtg(i)} className={active == i ? "active" : ""}>
				{value}
			</li>
			)
		  }
		</ul>
	  </div>
	);
  }

  export default Categories