import PropTypes from 'prop-types'
import Star from './Star'
var createReactClass = require('create-react-class');

const StarRating = createReactClass({
    displayName: "StarRating",
    propTypes: {
        totalStars:  PropTypes.number
    },
    getDefaultProps() {
        return {
            totalStars: 5
        }
    },
    getInitialState() {
        return {
            selectedStars: 0
        }
    },
    change(selectedStars) {
        this.setState({selectedStars})
    },
    render() {
        const {totalStars} = this.props
        const {selectedStars} = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                        selected={(i < selectedStars)}
                        onClick={() => this.change(i+1)} />
                )}
                <p>{selectedStars} of {totalStars} stars</p>
            </div>
        )
    }
})

export default StarRating