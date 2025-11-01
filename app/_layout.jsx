import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
// slot content in layout file 

// screenOptions set globally for all screens inside stack
// override them by adding same option to separate screen
// usecolorscheme is a hook
const RootLayout = () => {
    const colorScheme = useColorScheme(); 
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <>
        <StatusBar value = 'auto'/>
        <Stack screenOptions={{ 
            headerTintColor: theme.title,
            headerStyle: { 
                backgroundColor: theme.navBackground,
            }
        }}>
        <Stack.Screen 
            name= "(auth)"
            options={{ 
                headerShown: false, // this will override the one inside auth layout thus needed
            }} /> 
        <Stack.Screen 
            name= "(dashboard)"
            options={{ 
                headerShown: false, // this will override the one inside auth layout thus needed
            }} /> 

        <Stack.Screen 
            name= "index"
            options={{ 
                title: 'Home',
            }} /> 
    </Stack>
    </>
    )
}

export default RootLayout