import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsStackNavigator } from "./RestaurantsStackNavigator";

import MapScreen from "../screens/MapScreen";
import { SettingsStackNavigator } from "./SettingsStackNavigator";
import { CheckoutStackNavigator } from "./CheckoutStackNavigator";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Salitas: "md-medkit",
    Map: "md-map",
    Settings: "md-settings",
    Checkout: "md-cart",
};

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    // You can return any component that you like here!
                    return (
                        <Ionicons
                            name={TAB_ICON[route.name]}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.brand.primary,
                inactiveTintColor: colors.brand.muted,
            }}
        >
            <Tab.Screen name="Salitas" component={RestaurantsStackNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
        </Tab.Navigator>
    );
};
