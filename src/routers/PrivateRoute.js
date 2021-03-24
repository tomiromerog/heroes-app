import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    
    localStorage.setItem('lastPath', rest.location.pathname);


    return (
        <div>
            <Route {...rest}
                component={ (props) => (
                    ( isAuthenticated )
                        ? ( <Component { ...props } /> )
                        : ( <Redirect to='/login' /> )
                )}
            />
            
        </div>
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
