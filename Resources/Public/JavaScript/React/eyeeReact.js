//import React from 'react'
//import { render } from 'react-dom'
import Menu from './Components/Menu'
import data from './Data/recipes'
import AddColorForm from './Components/AddColorForm'
import App from './Components/color_organizer/App'
import MemberList from './Components/get_fake_members/MemberList'
import { HiddenMessages, Display } from './Components/hidden_messages/HiddenMessages'
import CountryList from './Components/country_list/CountryList'
    
$(function() {
    const logColor = (title, color) =>
        console.log(`onNewColor:  ${title}/${color}`)
    const age = 22
    
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
    else if  (document.getElementById('react-container-get-fake-members'))
        ReactDOM.render(
            <MemberList count={20} />,
            document.getElementById('react-container-get-fake-members')
        )
    else if  (document.getElementById('react-container-hidden-messages'))
        ReactDOM.render(
            <><HiddenMessages /><Display ifTruthy={age >= 21}><h1>You are old enough...</h1></Display></>,
            document.getElementById('react-container-hidden-messages')
        )

    else if  (document.getElementById('react-container-country-list'))
        ReactDOM.render(
            <CountryList />,
            document.getElementById('react-container-country-list')
        )
})