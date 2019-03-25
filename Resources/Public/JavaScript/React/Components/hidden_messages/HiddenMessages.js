import {Component, Children} from 'react'

export class HiddenMessages extends Component {
    constructor(props) {
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
        console.log("HiddenMessages:componentWillMount...")
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
        const { messages, showing } = this.state
        return (
            <div className="hiddenMessages">
                {messages.map((message,i) =>
                    <HiddenMessage
                        key={i}
                        hide={(i !== showing)}>
                        {message}
                    </HiddenMessage>
                )}
            </div>
        )
    }
}

export class HiddenMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide})
    }
    
    render() {
        const { children } = this.props
        const { hidden } = this.state
        return (
            <p>
                {(hidden)
                    ? children.replace(/[a-zA-Z0-9]/g, "x")
                    : children
                }
            </p>
        )
    }
}

export const Display = ({ifTruthy=true, children}) =>
    (ifTruthy)
        ? Children.only(children)
        : null
