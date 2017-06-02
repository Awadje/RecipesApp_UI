import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

export default function storeCurrentUser(
  state = JSON.parse(localStorage.getItem('User')) || {}, { type, payload }) {
  switch (type) {
    case USER_SIGNED_IN :
      localStorage.setItem('User', JSON.stringify(payload))
      return payload

    case USER_SIGNED_OUT :
      localStorage.removeItem('User')
      return {}

    default :
      return state
  }
}
