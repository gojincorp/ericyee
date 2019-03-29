import {configure, shallow} from 'enzyme'
import Star from '../Components/redux_color_organizer/Star'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter() })

describe("<Star /> UI Component", () => {
    it("renders default star", () =>
        expect(shallow(<Star />)
            .find('div.star')
            .length
        ).toBe(1)
    )
    
    it("renders selected stars", () =>
        expect(shallow(<Star selected={true} />)
            .find('div.selected.star')
            .length
        ).toBe(1)
    )
    
    it("invoke onClick", () => {
        const _click = jest.fn()
        
        shallow(<Star onClick={_click} />)
            .find('div.star')
            .simulate('click')
            
        expect(_click).toBeCalled()
    })
})