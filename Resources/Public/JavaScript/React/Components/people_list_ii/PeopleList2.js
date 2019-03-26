import { render } from 'react-dom'
import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'


const PeopleList2 = ({data}) =>
    <ol className="people-list">
        {data.map((person, i) => {
            const { first, last } = person.name
            return <i key={i}>{first} {last}</i>
        })}
    </ol>
    
const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            console.log("PeopleList2::constructor")
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }
        
        componentWillMount() {
            console.log("PeopleList2::componentWillMount")
            this.setState({loading:true})
            fetch(url.bind(this)())
                .then(response => response.json())
                .then(obj => obj.results)
                .then(data => this.setState({
                    data,
                    loaded: true,
                    loading: false
                }))
        }
        
        render() {
            console.log("PeopleList2::render")
            return (
                <div className="data-component">
                    {(this.state.loading)
                        ? <div>Loading people...</div>
                        : <ComposedComponent {...this.state} />
                    }
                </div>
            )
        }
    }

const RandomMeUsers = DataComponent(PeopleList2, function() { return `https://randomuser.me/api/?results=${this.props.count}` })
RandomMeUsers.propTypes = {
    count:  PropTypes.number
}
RandomMeUsers.defaultProps = {
    count: 50
}

export default RandomMeUsers