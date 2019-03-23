const Instructions = ({title, steps=[]}) =>
    <section className="instructions">
        <h3>{title}</h3>
        {
            steps.map((step, i) =>
                <p key={i}>{step}</p>
            )
        }
    </section>

Instructions.propTypes = {
    steps: (props, propName) => (typeof props[propName] !== 'object') ? new Error("Instructions.js:  Steps must be an array..." + (typeof props[propName])) : null
}

Instructions.defaultProps = {
    steps: []
}

export default Instructions