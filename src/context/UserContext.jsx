import {createContext, useState} from "react";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children}) => {
   
    const [Profile, setProfile] = useState([]);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [myposts, setMyposts] = useState([]);
    
    return (<UserContext.Provider
        value={{
            Profile, setProfile, users, setUsers, posts, setPosts, myposts, setMyposts
        }}>{children}</UserContext.Provider>)
}
