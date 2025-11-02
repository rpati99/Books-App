import { createContext, useEffect, useState } from "react";
import { ID } from 'react-native-appwrite';
import { account } from "../lib/appwrite";

// create constant
export const UserContext = createContext(); 

// provider component
export function UserProvider({ children }) { 
    const [user, setUser] = useState(null); 
    const [authChecked, setAuthChecked] = useState(false); 


    async function login(email, password) { 
        try { 
            await account.createEmailPasswordSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (error) { 
            throw Error(error.message)
        }
    }

    async function register(email, password) { 
        try { 
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) { 
            throw Error(error.message)
        }
    }

    async function logout() { 
        await account.deleteSession('current');
        setUser(null);
    }

    async function getInitialUserValue() { 
        try { 
            const response = await account.get(); 
            setUser(response)
        } catch (error) { 
            setUser(null)
        } finally { 
            setAuthChecked(true)
        }
    }

    useEffect(() => { 
        getInitialUserValue()
    }, [])

    return (
        // wrap, value prop inside
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
        {children}
        </UserContext.Provider>
    );
}
