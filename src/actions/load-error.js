export const LOADING_ERROR = 'LOADING_ERROR'

export default (error) => {
    console.error(error)
    return  {
      type: LOADING_ERROR,
      payload: error
      }
    }
