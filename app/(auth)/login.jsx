import { Link } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedText from '../../components/ThemedText';
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedView from '../../components/ThemedView';
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

// themed components

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(null); 

    // using hook inside screen
    const { user, login } = useUser();

    const handleSubmit = async () => { 
        setError(null); // reset error first for edge case

        try { 
            await login(email, password)
        } catch(error) { 
            setError(error.message)
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style = {styles.container}>
        <Spacer/>
        <ThemedText isTitle = {true} style={styles.title}>
            Login to your account
        </ThemedText>

        <ThemedTextInput 
            style={{ width: '80%', marginBottom: 20}}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
        />

          <ThemedTextInput 
            style={{ width: '80%', marginBottom: 20}}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
        />

        <ThemedButton
            onPress = {handleSubmit}>
            <Text style = {{ color: '#f2f2f2'}}>Login</Text>
        </ThemedButton>
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href={'/register'}> 
            <ThemedText style = {{textAlign: 'center'}}>
                Register instead
            </ThemedText>
        </Link>
    </ThemedView>
   </TouchableWithoutFeedback>
  )
}

export default Login

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
    error: { 
        color: Colors.warning, 
        padding: 10, 
        backgroundColor: '#f5c1c8', 
        borderColor: Colors.warning, 
        borderWidth: 1, 
        borderRadius: 6, 
        marginHorizontal: 10,
    }
})