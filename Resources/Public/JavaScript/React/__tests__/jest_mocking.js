import { configure, mount } from 'enzyme'
import ColorList from '../Components/color_organizer/ColorList'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter() })

jest.mock('../Components/color_organizer/Color', () =>
    ({rating, saveRating}) =>
        <div className="mock-color">
            <button className="rate" onClick={() => saveRating(rating)} />
        </div>
)

describe("<ColorList /> UI Component", () => {
    describe("Rating a Color", () => {
        let _rate = jest.fn()
        
        beforeAll(() =>
            mount(<ColorList colors={_testColors} saveRating={_rate} />)
                .find('button.rate')
                .first()
                .simulate('click')
        )
        
        it("invokes onRate handler", () =>
            expect(_rate).toBeCalled()
        )
        
        it("rates the correct color", () =>
            expect(_rate).toBeCalledWith(
                "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                4
            )
        )
    })
})