import React from "react";
import {
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../screens/RestaurantsScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";

const Stack = createStackNavigator();

export const RestaurantsStackNavigator = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
        >
            <Stack.Screen name="Salitas" component={RestaurantsScreen} />
            <Stack.Screen
                name="Detalles del lugar"
                component={RestaurantDetailsScreen}
            />
        </Stack.Navigator>
    );
};
