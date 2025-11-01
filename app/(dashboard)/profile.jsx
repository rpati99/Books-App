import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

export default function Profile() {
  return (
    <ThemedView style = {styles.container} safe={true}>
        
        <ThemedText title={true} style={styles.heading}>
           Your email
        </ThemedText>
        <Spacer />

        <ThemedText title={true}>
           Time to start reading some books...
        </ThemedText>
        <Spacer />

    </ThemedView>  
  )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }, 
    heading: { 
        fontWeight: 'bold', 
        fontSize: 18, 
        textAlign: 'center',
    }
})