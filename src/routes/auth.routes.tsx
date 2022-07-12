import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";
import { SignIn } from "../screens/signIn";

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "transparent"}
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}