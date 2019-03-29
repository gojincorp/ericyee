import C from './constants'

export const color = (state={}, action) => {
    switch(action.type) {
    case C.ADD_COLOR:
        return {
            id: action.id,
            title: action.title,
            color: action.color,
            timestamp: action.timestamp,
            rating: 0
        }
    case C.RATE_COLOR:
        return {
            ...state,
            rating: action.rating}
    default:
        return state
    }
}

export const colors = (state=[], action) => {
    switch(action.type) {
    case C.ADD_COLOR:
        return [
            ...state,
            color({},action)
        ]
    case C.RATE_COLOR:
        return state.map(colorObj =>
            (colorObj.id === action.id)
                ? color(colorObj, action)
                : colorObj
        )
    case C.REMOVE_COLOR:
        return state.filter(colorObj =>
            colorObj.id !== action.id
        )
    default:
        return state
    }
}

export const sort = (state="SORTED_BY_DATE", action) => {
    switch(action.type) {
    case C.SORT_COLORS:
        return action.sortBy
    default:
        return state
    }
}

export const colorTest = (state, action) => {
    switch (action.type) {
    case C.ADD_COLOR:
        return {
            id: action.id,
            title: action.title,
            color: action.color,
            timestamp: action.timestamp,
            rating: 0
        }
    case C.RATE_COLOR:
        return {
            ...state,
            rating: action.rating
        }
    default:
        return state
    }
}