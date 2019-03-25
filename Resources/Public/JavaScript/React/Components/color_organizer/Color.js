/*
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Color = ({colorName="New Color", color="#ffffff", rating=0, saveRating=f=>f, onRemove=f=>f}) => {
    return (
        <section className="color">
            <header><h1>{colorName}</h1></header>
            <button onClick={onRemove}>X</button>
            <div className="colorSample" style={{backgroundColor: color, height: 50}} />
            <div>
                <StarRating selectedStars={rating} saveRating={saveRating} />
            </div>
        </section>
    )
}

Color.propTypes = {
    colorName:  PropTypes.string,
    color:  PropTypes.string,
    rating:  PropTypes.number
}

export default Color
*/
import CreateReactClass from 'create-react-class'
import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Color = CreateReactClass({
    displayName: "Color",
    propTypes: {
        colorName: PropTypes.string,
        color:  PropTypes.string,
        rating:  PropTypes.number,
        saveRating:  PropTypes.func,
        onRemove:  PropTypes.func
    },
    getDefaultProps() {
        console.log("Color::getDefaultProps")
        return {
            colorName:  "New Color",
            color:  "#ffffff",
            rating:  0,
            saveRating:  f=>f,
            onRemove:  f=>f
        }
    },
    getInitialState() {
        console.log("Color::getInitialState")
        return {}
    },
    componentWillMount() {
        this.style = {backgroundColor: "#CCC"}
        console.log("Color::componentWillMount")
    },
    componentWillUpdate() {
        this.style = null
        console.log("Color::componentWillUpdate")
    },
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props
        return rating != nextProps.rating
    },
    componentDidUpdate(prevProps) {
        const {colorName, rating} = this.props
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${colorName} is getting ${status}`)
    },
    render() {
        console.log("Color::render")
        const {colorName, color, rating, saveRating, onRemove} = this.props
        return (
            <section className="color" style={this.style}>
                <header><h1>Name:  {colorName}</h1></header>
                <button onClick={onRemove}>X</button>
                <div className="colorSample" style={{backgroundColor: color, height: 50}} />
                <div>
                    <StarRating selectedStars={rating} saveRating={saveRating} />
                </div>
            </section>
        )
    },
    componentDidMount() {
        console.log("Color::componentDidMount")
    },
    componentWillUnmount() {
        console.log("Color::componentWillUnmount")
    }
})

export default Color