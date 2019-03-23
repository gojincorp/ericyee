import PropTypes from 'prop-types'
import Star from './Star'

const StarRating = ({selectedStars=0, totalStars=5, saveRating=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                selected={(i < selectedStars)}
                onClick={() => saveRating(i + 1)} />
        )}
        <p>{selectedStars} of {totalStars} stars</p>
    </div>

StarRating.propTypes = {
    selectedStars:  PropTypes.number,
    totalStars:  PropTypes.number,
    onRate:  PropTypes.func
}

export default StarRating