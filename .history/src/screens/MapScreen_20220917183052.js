import React, { useContext } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { LocationContext } from "../contexts/LocationProvider";
import { RestaurantsContext } from "../contexts/RestaurantsProvider";
import MapSearchBar from "../components/MapSearchBar";
import Loading from "../components/Loading";
import RestaurantCompactCard from "../components/RestaurantCompactCard";

const MapContainer = styled.View`
    flex: 1;
`;

const Map = styled(MapView)`
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
`;

export default function MapScreen({ navigation }) {
    const { region, location, setLocation } = useContext(LocationContext);
    const { restaurants, loading } = useContext(RestaurantsContext);

    if (loading) {
        return <Loading />;
    }

    return (
        <MapContainer>
            <MapSearchBar location={location} setLocation={setLocation} />
            <Map
                region={{
                    latitude: -27.49,
                    longitude: -58.92,
                    latitudeDelta: 0.06522,
                    longitudeDelta: 0.05421,
                }}
            >
                {/*restaurants.map((restaurant) => {
                    return (
                        <MapView.Marker
                            key={restaurant.placeId}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout
                                onPress={() => {
                                    navigation.navigate("Detalles del lugar", {
                                        restaurant: restaurant,
                                    });
                                }}
                            >
                                <RestaurantCompactCard
                                    map
                                    restaurant={restaurant}
                                />
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })*/}
            </Map>
        </MapContainer>
    );
}
