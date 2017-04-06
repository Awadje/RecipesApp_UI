import { LOAD_ERROR } from '../actions/load-error'
import { LOAD_SUCCES } from '../actions/load-success'
export default (state =null, {type, payload} = {}) => {

  switch(type)
 {
     case LOAD_ERROR:
      console.error(payload)
      return payload

     case LOAD_SUCCES :
      return null

     default :
       return state
         }
       }
