const Ingredient = ({name, measurement, amount}) =>
    <li>
        <span className="name">{name}</span>
        <span className="measurement">{measurement}</span>
        <span className="amount">{amount}</span>
    </li>

export default Ingredient