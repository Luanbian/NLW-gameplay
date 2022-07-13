import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { SignIn } from "../screens/signIn";

const Stack = createStackNavigator();

export function AuthRoutes(){
    return(
        <Stack.Navigator
        screenOptions={{
                cardStyle: {
                    backgroundColor: "#070B24"
                },
                headerShown: false
            }} 
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}