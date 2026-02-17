import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px"
};

function MapaGeoLocalizacion() {
    // 1. Usamos el mismo cargador que en tu otro mapa para evitar conflictos
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script', // Mismo ID para que React sepa que es la misma API
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: "weekly"
    });

    const [ubicacion, setUbicacion] = useState(null);

    // 2. Obtenemos la ubicación del usuario
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                console.error("Error obteniendo ubicación:", error);
                // Ponemos una ubicación por defecto si falla (opcional)
            },
            { enableHighAccuracy: true }
        );
    }, []);

    if (loadError) return <div>Error cargando el mapa</div>;
    if (!isLoaded) return <div>Cargando mapa...</div>;

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Tu Ubicación Actual</h3>
            
            {/* 3. Solo mostramos el mapa si ya tenemos la ubicación (lat/lng) */}
            {ubicacion ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={ubicacion}
                    zoom={15}
                >
                    <MarkerF position={ubicacion} />
                </GoogleMap>
            ) : (
                <p>Buscando tu señal GPS...</p>
            )}
        </div>
    );
}

export default MapaGeoLocalizacion;