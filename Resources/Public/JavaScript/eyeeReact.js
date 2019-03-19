$(function() {
	// The data
	var data = [
		{
			"name": "Recipe #1",
			"ingredients": [
				{
					"name": "Ingredient #1",
					"amount": "Amnt #1",
					"measurement":  "Msr #1"
				},
				{
					"name": "Ingredient #2",
					"amount": "Amnt #2",
					"measurement":  "Msr #2"
				},
				{
					"name": "Ingredient #3",
					"amount": "Amnt #3",
					"measurement":  "Msr #3"
				}
			],
			"steps": [
				"Step 1",
				"Step 2",
				"Step 3"
			]
		},
		{
			"name": "Recipe #2",
			"ingredients": [
				{
					"name": "Ingredient #1",
					"amount": "Amnt #1",
					"measurement":  "Msr #1"
				},
				{
					"name": "Ingredient #2",
					"amount": "Amnt #2",
					"measurement":  "Msr #2"
				},
				{
					"name": "Ingredient #3",
					"amount": "Amnt #3",
					"measurement":  "Msr #3"
				}
			],
			"steps": [
				"Step a",
				"Step b",
				"Step c"
			]
		}
	]
/*
	const Recipe = ({name, ingredients, steps}) =>
		<section id={name.toLowerCase().replace(/ /g, "-")}>
			<h1>{name}</h1>
			<ul className="ingredients">
				{
					ingredients.map((ingredient, i) =>
						<li key={i}>{ingredient.name}</li>
					)
				}
			</ul>
			<section className="instructions">
				<h2>Cooking Instructions:</h2>
				{
					steps.map((step, i) =>
						<p key={i}>{step}</p>
					)
				}
			</section>
		</section>
	
	const Menu = ({title, recipes}) =>
		<article>
			<header>
				<h1>{title}</h1>
			</header>
			<div className="recipes">
				{recipes.map((recipe, i) =>
					<Recipe key={i} {...recipe} />
					//recipe.name
				)}
			</div>
		</article>
	
	ReactDOM.render(
		<Menu recipes={data} title="IB Recipes" />,
		document.getElementById('react-container')
	)
*/
	
	const Recipe = ({name, ingredients, steps}) =>
		<section id={name.toLowerCase().replace(/ /g, "-")}>
			<h1>{name}</h1>
			<ul className="ingredients">
				{
					ingredients.map((ingredient, i) =>
						<li key={i}>{Object.values(ingredient).join()}</li>
					)
				}
			</ul>
			<section className="instructions">
				<h2>Cooking Instructions:</h2>
				{
					steps.map((step, i) =>
						<p key={i}>{step}</p>
					)
				}
			</section>
		</section>
	
	const Menu = ({title, recipes}) =>
		<article>
			<header><h1>{title}</h1></header>
			<div className="recipes">
				{recipes.map((recipe, i) =>
					<Recipe key={i} {...recipe} />
				)}
			</div>
		</article>
	
	ReactDOM.render(
		<Menu recipes={data} title="My Recipes" />,
		document.getElementById('react-container')
	)
})