import React from 'react';
import {Route, Redirect} from "react-router-dom";
import { fakeAuth } from './Login';

// export const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
//     <Route {...rest} render={props => (
//         isAuthenticated
//             ? (
//                 <Component {...props}/>
//             )
//             :
//             (
//                 <Redirect to={{
//                   pathname: '/login',
//                   state: {from: props.location}
//                 }}/>
//             )
//     )}/>
// );
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    fakeAuth.isAuthenticated 
      ? <Component {...props}/>
      : (<Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
  )}/>
);