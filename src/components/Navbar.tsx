import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div className='nav'>Loading...</div>;
    }

    return (
        <nav className='nav'>
            {isAuthenticated &&
                <>
                    <img src={user?.picture} />
                    <h4>Welcome, <strong>{user?.name}</strong></h4>
                </>}

            <Link to={user?.email ? '/logout' : '/login'}><button>{isAuthenticated ? 'Logout' : 'Login'}</button></Link>
        </nav>
    )
}





