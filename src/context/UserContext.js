import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext({});


export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
export default UserContext;
