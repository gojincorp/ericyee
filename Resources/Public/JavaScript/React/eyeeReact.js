//import React from 'react'
//import { render } from 'react-dom'
import Menu from './Components/Menu'
import data from './Data/recipes'
import AddColorForm from './Components/AddColorForm'
import App from './Components/color_organizer/App'
import MemberList from './Components/get_fake_members/MemberList'
import { HiddenMessages, Display } from './Components/hidden_messages/HiddenMessages'
import CountryList from './Components/country_list/CountryList'
import Timeline from './Components/d3_timeline/D3Timeline'
import PeopleList from './Components/people_list_i/PeopleList'
import RandomMeUsers from './Components/people_list_ii/PeopleList2'
import { NewHiddenMessages, PopUpButton } from './Components/expandable/Expandable'

$(function() {
    const logColor = (title, color) =>
        console.log(`onNewColor:  ${title}/${color}`)
    const age = 22
    
    const historicDatesForSkiing = [
        {year: 1879, event: 'Ski manufacturing begins'},
        {year: 1882, event: 'Timeline event #2'},
        {year: 1924, event: 'Timeline event #3'},
        {year: 1949, event: 'Timeline event #4'},
        {year: 1988, event: 'Timeline event #5'},
        {year: 2001, event: 'Timeline event #6'}
    ]
    
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
    else if  (document.getElementById('react-container-d3-timeline'))
        ReactDOM.render(
            <Timeline name="History of Skiing" data={historicDatesForSkiing} />,
            document.getElementById('react-container-d3-timeline')
        )
    else if  (document.getElementById('react-container-people-list-i'))
        ReactDOM.render(
            <PeopleList />,
            document.getElementById('react-container-people-list-i')
        )
    else if  (document.getElementById('react-container-people-list-ii'))
        ReactDOM.render(
            <RandomMeUsers count={10} />,
            document.getElementById('react-container-people-list-ii')
        )
    else if  (document.getElementById('react-container-expandable'))
        ReactDOM.render(
            <><NewHiddenMessages /><PopUpButton hidden={true} txt="Toggle PopUp"><h1>Hidden Content</h1><p>This content starts off hidden</p></PopUpButton></>,
            document.getElementById('react-container-expandable')
        )
})