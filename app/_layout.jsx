import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { BooksProvider } from "../contexts/BooksContext";
import { UserProvider } from "../contexts/UserContext";
// slot content in layout file 

// screenOptions set globally for all screens inside stack
// override them by adding same option to separate screen
// usecolorscheme is a hook
const RootLayout = () => {
    const scheme = useColorScheme() ?? "light";   // 'light' | 'dark' | null
    const theme = Colors[scheme];

    return (
        <UserProvider>
            <BooksProvider>
        <StatusBar style = 'auto'/>
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
    </BooksProvider>
    </UserProvider>
    )
}

export default RootLayout