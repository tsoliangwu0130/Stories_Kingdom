import React, { PureComponent, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class CoverPage extends PureComponent {

  componentDidMount() {
    // localStorage.removeItem('auth_token')
  }

  clickLoginBtn = (event) => {
    event.preventDefault()
    const inputName = this.usernameInput.value;

    if (inputName.trim()) {
      this.props.getAuth(inputName)
    }

  }

  render() {
    const {auth} = this.props.user;

    const LoginBlock = (
    <div>
      <input
        id="input_login"
        type="text"
        ref={ input => this.usernameInput = input } />
      <button id="btn_login" onClick={ this.clickLoginBtn }>
        Login
      </button>
    </div>
    )

    return (
    auth === 'success' ? (
      <Redirect to={ '/lists' } />
      ) : (
      LoginBlock
      )
    );

  }

}

CoverPage.propTypes = {


};

export default connect(mapStateToProps, mapDispatchToProps)(CoverPage);


function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  };
}

import { actGetToken } from '../../redux/actions/user/actAuth.js';

function mapDispatchToProps(dispatch) {
  return {
    getAuth: name => dispatch(actGetToken(name)),
  }
}