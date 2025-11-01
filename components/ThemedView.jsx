import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// eliminate {children} and passing of children prop from destructuring by using />, it will auto include children aka nested/inside components
// expect a style prop
const ThemedView = ({ style, safe=false, ...props }) => {
    const colorScheme = useColorScheme(); 
    const theme = Colors[colorScheme] ?? Colors.light; 

    // console.log('Color Scheme:', colorScheme);
    // console.log('Theme background:', theme.background);
   
    if (!safe) return (
        <View 
            style = {[{backgroundColor: theme.background }, style]}  
            {...props}
        />
  )
  
  const insets = useSafeAreaInsets()
  return (
        <View 
            style = {[{backgroundColor: theme.background, 
                paddingTop: insets.top, 
                paddingBottom: insets.bottom,
            }, 
            style]}  
            {...props}
        />
  )

}

export default ThemedView;