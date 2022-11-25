import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {

  state = {
    redirectToReferrer: false
  };

  login = () => {
   
    fakeAuth.authenticate(() => {
     
      this.setState({redirectToReferrer: true})
      debugger;
    })
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer) {
      return (
          <Redirect to={from}/>
      )
    }

    return (
        <div>
          <p>You must log in to view the content at {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
    )
  }
}

/* A fake authentication function */
export const fakeAuth = {
  
  isAuthenticated: false,
  authenticate(cb) {
    
    this.isAuthenticated = true;
   
    setTimeout(cb,100)
    debugger;
  },
};

export default Login;