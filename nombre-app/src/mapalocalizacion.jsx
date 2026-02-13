import {useEffect,useState} from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapaGeoLocalizacion(){ 
    const[ubicación, setUbicacion] = useState(null);

    useEffect(()=>{ 
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setUbicacion({
                    lat: position.coords.latitude,  //latitud
                    lng: position.coords.longitude  //longuitud 
                })
            },
            (error) => console.error(error),
            {enableHighAccuracy:true}
        )
    },[])
    return(
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            {setUbicacion && (
                <GoogleMap
                mapContainerStyle={{width:"100",height:"300PX"}}
                center={ubicación}
                zoom={15}
                >
                    <Marker position={ubicación}/>
                </GoogleMap>
            )
            }
        </LoadScript>
    )
}

export default MapaGeoLocalizacion
// se usa pra poder saber la ubicación del dispositivo y que solo se jala desde aca para usarlo en cuaquer lgar 