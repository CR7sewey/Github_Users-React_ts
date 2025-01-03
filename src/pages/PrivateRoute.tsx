import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

    const { isAuthenticated, user } = useAuth0();

    const isUser = isAuthenticated && user

    if (!isUser) {
        return <Navigate to={'/login'} />
    }


    return (
        <>{children}</>
    );
}