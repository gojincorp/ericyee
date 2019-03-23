const AddColorForm = ({saveNewColor=f=>f}) => {
    let _colorName, _color
    const submit = e => {
        e.preventDefault()
        saveNewColor(_colorName.value, _color.value)
        _colorName.value = ''
        _color.value = '#000000'
        _colorName.focus()
    }
    return (
        <form className="color-form" onSubmit={submit}>
            <input
                type="text"
                ref={input=>_colorName=input}
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

export default AddColorForm