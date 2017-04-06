import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import RecipeEditor from './RecipeEditor'


export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.loading ? 'Loading' : null }
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
            <RecipeEditor title="" />
      </div>
    )
  }
}

const mapStateToProps = ({ recipes, loading }) => ({ recipes, loading })

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)
