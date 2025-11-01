import { View, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors"

// eliminate {children} and passing of children prop from destructuring by using />, it will auto render children within the view
// expect a style prop
const ThemedCard = ({ style, ...props }) => {
    const colorScheme = useColorScheme(); 
    const theme = Colors[colorScheme] ?? Colors.light; 

    // console.log('Color Scheme:', colorScheme);
    // console.log('Theme background:', theme.background);
    
  return (
    <View 
    style = {[{backgroundColor: theme.uiBackground }, styles.card, style]}  
    {...props}
    />
  )
}

export default ThemedCard;

const styles = StyleSheet.create({ 
    card: { 
        borderRadius: 5, 
        padding: 20,
    }
})