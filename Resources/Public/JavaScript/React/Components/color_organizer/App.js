import { Component } from 'react'
import { v4 } from 'uuid'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            colors: []
        }
        
        this.saveNewColor = this.saveNewColor.bind(this)
        this.saveRating = this.saveRating.bind(this)
        this.removeColor = this.removeColor.bind(this)
    }
    
    saveNewColor(colorName, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                colorName,
                color,
                rating: 0
            }]
        this.setState({colors})
    }
    
    saveRating(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id)
            ? color
            : {...color, rating}
        )
        this.setState({colors})
    }
    
    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id)
        this.setState({colors})
    }
    
    render () {
        const {saveNewColor, saveRating, removeColor} = this
        const {colors} = this.state
        return (
            <div className='app'>
                <AddColorForm saveNewColor={saveNewColor} />
                <ColorList colors={colors} saveRating={saveRating} removeColor={removeColor} />
            </div>
        )
    }
}

export default App