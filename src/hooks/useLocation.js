import { useState, useEffect } from "react";
import * as Location from "expo-location";


function useLocation() {
    const [location, setLocation] = useState(null);
    async function getLastKnownPosition() {
        const { granted } = await Location.requestPermissionsAsync();
        if(!granted) {
            return;
        }
        const { coords } = await Location.getLastKnownPositionAsync();
        setLocation(coords);
    }

    useEffect(() => {
        getLastKnownPosition();
    }, []);


    return location;
}


export default useLocation;
