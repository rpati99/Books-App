import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser() { 
    const context = useContext(UserContext);
    // making sure wrapping is valid
    if (!context) { 
        throw new Error("useUser must be used within UserProvider");
    }   
    return context;
}