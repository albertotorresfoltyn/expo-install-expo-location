import React, { useEffect, useState, createContext, useCallback } from "react";
import geoCodeLocation from "../mockApi/api/locationsApi";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState("Corrientes");
    const [coords, setCoords] = useState("-28.2941251,-58.9356035");
    const [region, setRegion] = useState({});

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
