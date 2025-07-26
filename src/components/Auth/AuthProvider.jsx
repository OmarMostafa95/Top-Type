import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            setCurrentUser(user)
        }
    }, [])
    const login = (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
    }
    const logout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        window.location.reload()
    }
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


export { AuthProvider, useAuth };
