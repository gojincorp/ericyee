import {Component} from 'react'

export const Expandable = ComposedComponent =>
    class Expandable extends Component {
        constructor(props) {
            console.log("Expandable::constructor")
            super(props)
            const collapsed = (props.hidden && props.hidden === true)
                ? true
                : false
            this.state = {collapsed}
            this.expandCollapse = this.expandCollapse.bind(this)
        }
        
        expandCollapse() {
            console.log("Expandable::expandCollapse")
            let collapsed = !this.state.collapsed
            this.setState({collapsed})
        }
        
        componentWillReceiveProps(nextProps) {
            console.log("Expandable::componentWillReceiveProps")
            const collapsed = (nextProps.hidden && nextProps.hidden === true)
            ? true
            : false
            this.setState({collapsed})
        }
        
        render() {
            console.log("Expandable::render")
            return <ComposedComponent
                        expandCollapse={this.expandCollapse}
                        {...this.state}
                        {...this.props} />
        }
    }
    
const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed)
            ? children.replace(/[a-zA-Z0-9]/g, 'x')
            : children
        }
    </p>
    
const HiddenMessage = Expandable(ShowHideMessage)

export class NewHiddenMessages extends Component {
    constructor(props) {
        console.log("NewHiddenMessages::constructor")
        super(props)
        this.state = { 
            messages: [
                "Message #1",
                "Message #2",
                "Message #3"
            ],
            showing: -1
        }
    }
    
    componentWillMount() {
        console.log("NewHiddenMessages:componentWillMount...")
        this.interval = setInterval(() => {
            let {showing, messages} = this.state
            showing = (++showing >= messages.length)
                ? -1
                : showing
            this.setState({showing})
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        console.log("NewHiddenMessages:render...")
        const { messages, showing } = this.state
        return (
            <div className="hiddenMessages">
                {messages.map((message,i) =>
                    <HiddenMessage
                        key={i}
                        hidden={(i !== showing)}>
                        {message}
                    </HiddenMessage>
                )}
            </div>
        )
    }
}

class MenuButton extends Component {
    render() {
        const {children, collapsed, txt, expandCollapse} = this.props
        return (
            <div className="pop-button">
                <button onClick={expandCollapse}>{txt}</button>
                {(!collapsed)
                    ? <div className="pop-up">{children}</div>
                    : ""
                }
            </div>
        )
    }
}

export const PopUpButton = Expandable(MenuButton)