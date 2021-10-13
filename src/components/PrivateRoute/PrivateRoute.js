import React from 'react';
import { Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    return (
        <Route>

        </Route>
    );
};

export default PrivateRoute;