import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <header>
            <h2>{name}</h2>
            <Instructions title="Cooking Instructions" steps={steps} />
        </header>
    </section>

Recipe.propTypes = {
    name: (props, propName) => (typeof props[propName] !== 'string') ? new Error("Recipe.js:  Name must be a string..." + (typeof props[propName])) : null,
    ingredients: (props, propName) => (typeof props[propName] !== 'object') ? new Error("Recipe.js:  Ingredients must be an array..." + (typeof props[propName])) : null,
    steps: (props, propName) => (typeof props[propName] !== 'object') ? new Error("Recipe.js:  Steps must be an array..." + (typeof props[propName])) : null
}

Recipe.defaultProps = {
    name: "Empty Recipe",
    ingredients: [],
    steps: []
}

export default Recipe