import { Component } from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'

class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loaded: false,
            loading: false
        }
    }
    
    componentWillMount() {
        console.log("PeopleList::componentWillMount")
        this.setState({loading:true})
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(obj => obj.results)
            .then(data => this.setState({
                data,
                loaded: true,
                loading: false
            }))
    }
    
    render() {
        console.log("PeopleList::render")
        const {data, loaded, loading} = this.state
        return (loading)
            ? <div>Loading people...</div>
            : <ol className="people-list">   
                {data.map((person, i) => {
                    const {first, last} = person.name
                    return <i key={i}>{first} {last}</i>
                })}
              </ol>
    }
}

export default PeopleList