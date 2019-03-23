import Ingredient from './Ingredient'

const IngredientsList = ({list}) =>
    <ul className="ingredients">
        {list.map((ingredient,i) =>
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

IngredientsList.propTypes = {
    list: (props, propName) => (typeof props[propName] !== 'object') ? new Error("List must be an array...") : null
}

IngredientsList.defaultProps = {
    list: []
}

export default IngredientsList