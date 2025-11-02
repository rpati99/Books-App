import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

// Themed components
import Spacer from '../../../components/Spacer';
import ThemedButton from '../../../components/ThemedButton';
import ThemedCard from '../../../components/ThemedCard';
import ThemeLoader from '../../../components/ThemedLoader';
import ThemedText from '../../../components/ThemedText';
import ThemedView from '../../../components/ThemedView';
import { Colors } from '../../../constants/Colors';
import { useBooks } from '../../../hooks/useBooks';

const BookDetails = () => {
    const [book, setBook] = useState(null); 
    const { id } = useLocalSearchParams()  // name should match filename and should be a property
    
    const { fetchBookById, deleteBook } = useBooks() 
    const router = useRouter() 

    const handleDelete = async () => { 
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }

    useEffect(() => { 
        async function loadBook() { 
            const bookData = await fetchBookById(id) 
            setBook(bookData)
        }

        loadBook()
    }, [id])

    if (!book) { 
        return ( 
            <ThemedView safe={true} style={styles.container}>
                <ThemeLoader />
            </ThemedView>
        );
    }

  return ( 
    <ThemedView safe={true}
        style={styles.container}
    >
        <ThemedCard style={styles.card}>

       
        <ThemedText style={styles.title}>{book.title}</ThemedText>
       <ThemedText> Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText isTitle={true}> Book Description:</ThemedText>
        <Spacer height={10}/>
         <ThemedText>{book.description}</ThemedText>
          </ThemedCard>

          <ThemedButton style={styles.delete} onPress={handleDelete}> 
            <Text style={{color: '#ffffff', textAlign: 'center'}}>Delete Book</Text>
          </ThemedButton>
    </ThemedView>
  );
}

export default BookDetails

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'stretch',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    }, 
    card: { 
        margin: 20,
    }, 
    delete: { 
        marginTop: 40, 
        backgroundColor: Colors.warning, 
        width: 200, 
        alignSelf: 'center', 
    }
})