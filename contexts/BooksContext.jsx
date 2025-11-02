import { createContext, useEffect, useState } from "react";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";
import { client, databases } from "../lib/appwrite";
const DATABASE_ID = '6907aef50027b760fbb7'; 
const COLLECTION_ID = 'books'; 

// console.log('BooksContext - databases:', databases);
// console.log('BooksContext - databases type:', typeof databases);

export const BooksContext = createContext(); 

// provider function to all the states 
export function BooksProvider({ children }) { 
    const [books, setBooks] = useState([]); 
    const { user } = useUser()

    console.log('BooksContext - databases:', databases);
    console.log('BooksContext - databases type:', typeof databases);

    async function fetchBooks() { 
        try { 
            const response = await databases.listDocuments( 
                DATABASE_ID, 
                COLLECTION_ID, 
                [
                    Query.equal('userid', user.$id)
                ]
            )
            setBooks(response.documents)
            // console.log(response.documents)
        } catch(error) { 
            console.error(error.message)
        }
    }

    async function fetchBookById(id) { 
        try { 
            const response = await databases.getDocument(
                DATABASE_ID, 
                COLLECTION_ID, 
                id
            )

            return response
        } catch (error) { 
            console.error(error.message)
        }
    }

    async function createBook(data) { 
        try { 
            const newBook = await databases.createDocument(
                DATABASE_ID, 
                COLLECTION_ID,
                ID.unique(),
                {...data, userid: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            )
        } catch (error) { 
            console.error(error.message)
        }
    }

    async function deleteBook(id) { 
        try {
          await databases.deleteDocument(
            DATABASE_ID, 
            COLLECTION_ID,
            id
          )
        } catch(error) { 
            console.error(error.message)
        }
    }

    // fetch books when user logs in right away
    useEffect(() => {
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents` 
        if (user) { 
            fetchBooks()
            unsubscribe = client.subscribe(channel, (response) => { 
                const { payload, events } = response 
                
                if (events[0].includes('create')) { 
                    setBooks((prevBooks) => [...prevBooks, payload] )
                }
                if (events[0].includes('delete')) { 
                    setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id ) )
                }
            })
        } else { 
            setBooks([])
        }

        // cleanup function
        return () => { 
            if (unsubscribe) unsubscribe()
        }
    }, [user])

    return( 
        <BooksContext.Provider 
            value = {{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children} 
        </BooksContext.Provider>
    );
}
// render children