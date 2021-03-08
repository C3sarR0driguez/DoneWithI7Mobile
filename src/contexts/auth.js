import React, { createContext, useState } from "react";
import { useContext } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext };
export default AuthProvider;
