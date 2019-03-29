import C from './constants'
import { v4 } from 'uuid'

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })
    
export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export const sortColors = sortBy => {
    switch(sortBy) {
    case 'rating':
        return {
            type: C.SORT_COLORS,
            sortBy:  "SORT_BY_RATING"
        }
    case 'title':
        return {
            type: C.SORT_COLORS,
            sortBy:  "SORT_BY_TITLE"
        }
    default:
        return {
            type: C.SORT_COLORS,
            sortBy:  "SORT_BY_DATE"
        }
    }
}

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    })