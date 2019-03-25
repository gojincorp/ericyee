import { Component } from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'

class CountryList extends Component {
    constructor(props) {
        console.log("CountryLists::constructor...");
        super(props)
        this.state = {
            countryNames: [],
            loading: false
        }
    }
    
    componentDidMount() {
        console.log("CountryLists::componentDidMount...");
        this.setState({loading: true})
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames =>
                this.setState({countryNames, loading: false})
            )
    }
    
    render() {
        console.log("CountryLists::render...");
        const {countryNames, loading} = this.state
        return (loading)
            ? <div>Loading Country Names...</div>
            : (!countryNames.length) 
                ? <div>No country names found...</div>
                : <ul>
                    {countryNames.map((country, i) =>
                        <li key={i}>{country}</li>
                    )}
                  </ul>
    }
}

export default CountryList