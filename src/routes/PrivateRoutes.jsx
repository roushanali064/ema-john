import React, { useContext } from 'react';
import './PrivateRoutes.css'
import { userContext } from '../components/Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(userContext);
    const location = useLocation();

    if(loading){
        return <div className="spinner"></div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;