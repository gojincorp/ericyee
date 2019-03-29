import C from '../../../Components/redux_color_organizer/constants'
import { colorTest } from '../../../Components/redux_color_organizer/reducers'
import deepFreeze from 'deep-freeze'

describe("color Reducer", () => {
    it("ADD_COLOR sucess", ()=>{
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90c3d4',
            timestamp: new Date().toString()
        }
        deepFreeze(state)
        deepFreeze(action)
        const results = colorTest(state, action)
        expect(results).toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90c3d4',
                timestamp: action.timestamp,
                rating: 0
            })
    })
    it("RATE_COLOR sucess", ()=>{
        const state = {
            id: 0,
            title:  'Test Teal',
            color: '#90c3d4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }
        deepFreeze(state)
        deepFreeze(action)
        const results = colorTest(state, action)
        expect(results).toEqual({
            id: 0,
            title:  'Test Teal',
            color: '#90c3d4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: 3
            })
    })
})