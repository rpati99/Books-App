import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export function useBooks() { 
    const context = useContext(BooksContext);
    // making sure wrapping is valid
    if (!context) { 
        throw new Error("useBooks must be used within BooksProvider");
    }   
    return context;
}