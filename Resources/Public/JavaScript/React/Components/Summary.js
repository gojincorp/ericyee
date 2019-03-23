const createReactClass = require('create-react-class')
const PropTypes = require('prop-types')

const Summary = createReactClass({
    displayName: "Summary",
    propTypes: {
        name: (props, propName) => (typeof props[propName] !== 'string') ? new Error("Name must be a string..." + (typeof props[propName])) : null,
        ingredients: (props, propName) => (typeof props[propName] !== 'object') ? new Error("Ingredients must be an array..." + (typeof props[propName])) : null,
        steps: (props, propName) => (typeof props[propName] !== 'object') ? new Error("Steps must be an array..." + (typeof props[propName])) : null,
    },
    getDefaultProps() {
        return {
            name: "Blank Recipe",
            ingredients: [],
            steps: []
        }
    },
    render() {
        const {name, ingredients, steps} = this.props
        return (
            <div className="summary">
                <h1>{name} (Summary)</h1>
                <p>
                    <span>{ingredients.length} Ingredients</span> | <span>{steps.length} steps</span>
                </p>
            </div>
        )
    }
})

export default Summary