//import React from 'react'
//import { render } from 'react-dom'
import Menu from './Components/Menu'
import data from './Data/recipes'
import AddColorForm from './Components/AddColorForm'
import App from './Components/color_organizer/App'
    
$(function() {
    const logColor = (title, color) =>
        console.log(`onNewColor:  ${title}/${color}`)

    if (document.getElementById('react-container'))
        ReactDOM.render(
            <><Menu recipes={data} /><AddColorForm onNewColor={logColor} /><StarRating /></>,
            document.getElementById('react-container')
        )
    else if  (document.getElementById('react-container-color-organizer'))
        ReactDOM.render(
            <App />,
            document.getElementById('react-container-color-organizer')
        )
})