import React from "react";
import login from "../screens/login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={login} options={{title:'Login'}}/>
        </Stack.Navigator>
    );
}