import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List, Button, Divider } from "react-native-paper";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import SafeArea from "../components/SafeArea";
import { CartContext } from "../contexts/CartContext";
import { colors } from "../theme/colors";

export const OrderButton = styled(Button).attrs({
    color: colors.brand.primary,
})`
    padding: ${(props) => props.theme.space[2]};
    width: 80%;
    align-self: center;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export default function RestaurantDetailsScreen({ route, navigation }) {
    const { restaurant } = route.params;
    const { addToCart } = useContext(CartContext);

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    return (
        <SafeArea>
            <RestaurantCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Ayudas Sociales"
                    left={(props) => <List.Icon {...props} icon="" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title="Pañales (20)" />
                    <Divider />
                    <List.Item title="Vacunas (30)" />
                    <Divider />
                    <List.Item title="Anticonceptivos (30)" />
                </List.Accordion>

                <Divider />

                <List.Accordion
                    title="Especialidades"
                    left={(props) => <List.Icon {...props} icon="" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title="Odontología" />
                    <Divider />
                    <List.Item title="Pediatría" />
                    <Divider />
                    <List.Item title="Ginecología" />
                </List.Accordion>

                <Divider />

                <List.Accordion
                    title="Médicos"
                    left={(props) => <List.Icon {...props} icon="" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title="Dra. Maria Azcona (Odontologia MP:44673)" />
                    <Divider />
                    <List.Item title="Dra. Lucía Vallejos Jara (Clínica MP:44687)" />
                    <Divider />
                    <List.Item title="Dra. Melisa Calvano (Ginecología MP:42373)" />
                </List.Accordion>

            </ScrollView>
            <OrderButton
                icon=""
                mode="contained"
                onPress={() => {
                    addToCart(restaurant, { item: "special", price: 49900 });
                    navigation.navigate("Checkout");
                }}
            >
                Sacar Turno
            </OrderButton>
        </SafeArea>
    );
}
