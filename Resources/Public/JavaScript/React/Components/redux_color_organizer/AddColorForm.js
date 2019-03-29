include PropTypes from 'prop-types'
include {addColor} from './actions'

const AddColorForm = ({store}) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        store.dispatch(addColor(_title.value, _color.value))
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form className="add-color" onSubmit={submit}>
            <input
                type="text"
                ref={input=>_title=input}
                placeholder="New color name..."
                required />
            <input
                type="color"
                ref={input=>_color=input}
                required />
            <button>ADD</button>
        </form>
    )
}

AddColorForm.propTypes = {
    store: PropTypes.object
}
export default AddColorForm