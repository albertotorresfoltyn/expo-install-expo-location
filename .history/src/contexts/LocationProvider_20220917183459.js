import React, { useEffect, useState, createContext, useCallback } from "react";
import geoCodeLocation from "../mockApi/api/locationsApi";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState("Corrientes");
    const [coords, setCoords] = useState("-27.49,-58.82");
    const [region, setRegion] = useState({
        latitude: -27.49,
        longitude: -58.82,
        latitudeDelta: 0.07522,
        longitudeDelta: 0.07421,
    });

    const fetchLocation = useCallback(async () => {
        try {
            const data = await geoCodeLocation(location);
            const { lat, lng } = data.results[0].geometry.location;
            const { northeast, southwest } = data.results[0].geometry.viewport;
            setCoords(`${lat},${lng}`);
            const latDelta = northeast.lat - southwest.lat;
            setRegion({
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.01,
            });
        } catch (err) {
            console.log(err);
        }
    }, [location]);

    useEffect(() => {
        fetchLocation();
    }, [fetchLocation]);

    return (
        <LocationContext.Provider
            value={{ location, setLocation, coords, region }}
        >
            {children}
        </LocationContext.Provider>
    );
};
