import Recipe from './Recipe'
import Summary from './Summary'

const Menu = ({recipes}) =>
    <article>
        <header>
            <h1>Menu of the Day</h1>
        </header>
        <div className="summaries">
        {recipes.map((recipe, i) =>
            <Summary key={i} {...recipe} />
        )}
        </div>
        <div className="recipes">
        {recipes.map((recipe, i) =>
            <Recipe key={i} {...recipe} />
        )}
        </div>
    </article>
    
export default Menu