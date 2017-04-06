import API from '../../middleware/api'
import appLoading from '../loading'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'
import loadError from '../load-error'
import loadSuccess from '../load-success'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return (dispatch) => {
    console.log('Fetching recipes...')
    dispatch(appLoading(true))
      recipes.find()
      .then((result) => {
        setTimeout(function() {
        console.log('Results are in!', result)
        console.log('Should call the APP_DONE_LOADING state')
        dispatch(fetchedRecipes(result))
        dispatch(loadSuccess())
        dispatch(appLoading(false))
      }, 3000)
  })
        .catch((error) => {
        dispatch(loadError(error))
      })
}
}

const fetchedRecipes = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_RECIPES,
    payload: [].concat(result.data)
  }
}
