import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from "expo-router"
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
// themed components

const Register = () => {

    const handleSubmit = () => { 
        console.log('register form submitted');
    }

  return (
    <ThemedView style = {styles.container}>
        <Spacer/>
        <ThemedText isTitle = {true} style={styles.title}>
            Register for your account
        </ThemedText>
        <ThemedButton
            onPress = {handleSubmit}>
            <Text style = {{ color: '#f2f2f2'}}>Register</Text>
        </ThemedButton>
        <Spacer height={100} />
        <Link href={'/login'}> 
            <ThemedText style = {{textAlign: 'center'}}>
                Login instead
            </ThemedText>
        </Link>
    </ThemedView>
   
  )
}

export default Register

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { 
        textAlign: 'center', 
        fontSize: 18, 
        marginBottom: 30,
    }, 
})