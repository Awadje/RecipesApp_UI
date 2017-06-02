import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import signIn from '../actions/user/sign-in'
import Title from '../components/Title'


export class SignIn extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.signIn() {
      this.props.signIn(SignIn)
    }
  }



  render() {
    return (
      <div className="sign-up form">
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>

          <div className="input">
            <input ref="email" type="email" placeholder="Email address">
          </div>
          <div className="input">
            <input ref="password" type="password" placeholder="Password">
          </div>

          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default connect(null, { signIn })(SignIn)
