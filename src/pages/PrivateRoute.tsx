import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Navigate, redirect } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (!isAuthenticated) {
        return redirect('/login');
    }
    return (
        <div>{children}</div>
    )
}
