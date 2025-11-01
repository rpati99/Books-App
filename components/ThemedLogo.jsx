import { Image, useColorScheme } from 'react-native'
import React from 'react'

import DarkLogo from "../assets/images/splash-icon.png"
import LightLogo from "../assets/images/icon.png"


const ThemedLogo = ({...props }) => {
    const colorScheme = useColorScheme(); 
    const logo = colorScheme == 'dark' ? DarkLogo : LightLogo;

    // console.log('Color Scheme:', colorScheme);
    // console.log('Theme background:', theme.background);
    
  return (
   <Image source={logo} {...props}/>
  )
}

export default ThemedLogo;