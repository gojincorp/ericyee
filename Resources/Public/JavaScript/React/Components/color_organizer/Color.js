import PropTypes from 'prop-types'
import StarRating from './StarRating'

const Color = ({colorName="New Color", color="#ffffff", rating=0, saveRating=f=>f}) =>
    <section className="color">
        <header><h1>{colorName}</h1></header>
        <div className="colorSample" style={{backgroundColor: color, height: 50}} />
        <div>
            <StarRating selectedStars={rating} saveRating={saveRating} />
        </div>
    </section>

Color.propTypes = {
    colorName:  PropTypes.string,
    color:  PropTypes.string,
    rating:  PropTypes.number
}

export default Color