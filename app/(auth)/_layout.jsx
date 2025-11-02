import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import GuestOnly from '../../components/auth/GuestOnly'
// slot content in layout file 

// screenOptions set globally for all screens inside stack
// override them by adding same option to separate screen
// usecolorscheme is a hook
const AuthLayout = () => {

    return (
        <GuestOnly>
        <StatusBar value = 'auto'/>
        <Stack screenOptions={{ 
            headerShown: false,
            animation: 'none'
        }}>
    </Stack>
    </GuestOnly>
    )
}

export default AuthLayout