import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from './reducers'

const stateData = {
    colors: [
        {
            "id": "foobar1-id",
            "title": "Ocean Blue",
            "color": "#0070ff",
            "rating": "3"
        },
        {
            "id": "foobar2-id",
            "title": "Tomato",
            "color": "#d10012",
            "rating": "2"
        },
        {
            "id": "foobar3-id",
            "title": "Lawn",
            "color": "#67bf4f",
            "rating": "1"
        },
        {
            "id": "foobar4-id",
            "title": "Party Pink",
            "color": "#ff00f7",
            "rating": "5"
        }
    ],
    sort: "SORT_BY_TITLE"
}

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors, sort}),
        (localStorage['redux-storage'])
            ? JSON.parse(localStorage['redux-storage'])
            : initialState
    )
    
export default storeFactory