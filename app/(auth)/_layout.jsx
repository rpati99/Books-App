import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
// slot content in layout file 

// screenOptions set globally for all screens inside stack
// override them by adding same option to separate screen
// usecolorscheme is a hook
const AuthLayout = () => {

    return (
        <>
        <StatusBar value = 'auto'/>
        <Stack screenOptions={{ 
            headerShown: false,
            animation: 'none'
        }}>
             <Stack.Screen
            name='login'
            options = {{
                title: 'Login',
            }} />
        <Stack.Screen
            name='register'
            options = {{
                title: 'Register',
                // headerShown: false,
            }} />
    </Stack>
    </>
    )
}

export default AuthLayout