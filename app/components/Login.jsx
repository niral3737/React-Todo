import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin(){
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  onLoginWithGoogle(){
    var {dispatch} = this.props;

    dispatch(actions.startLoginGoogle());
  },
  render(){
    var buttonStyle = {
      background : '#d50f25'
    };
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with Github account below.
              </p>
              <div>
                <button className="button" onClick={this.onLogin}>Login With Github</button>
              </div>
              <div>
                <button className="button" style={buttonStyle} onClick={this.onLoginWithGoogle}>Login With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
