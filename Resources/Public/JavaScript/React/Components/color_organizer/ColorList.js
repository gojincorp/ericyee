const createReactClass = require('create-react-class')
import Color from './Color'

const ColorList = createReactClass({
    displayName: "ColorList",
    render() {
        const {colors, saveRating, removeColor} = this.props
        return (
            (colors.length === 0)
            ? <p>No colors added...</p>
            : colors.map(color =>
                <Color key={color.id} {...color} saveRating={(rating)=>saveRating(color.id,rating)} onRemove={()=>removeColor(color.id)} />
            )
        )
    }
})

export default ColorList