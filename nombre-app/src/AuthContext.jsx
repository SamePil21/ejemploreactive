import { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types'; // <--- PASO 1
import Login from "./Login";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };
    return (
        </AuthContext.Provider value={{ isLoggedIn, Login, logout}}>
        {children}
        </AuthContext.Provider>
    );
    export useContext = useContext{AuthContext};
     
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};