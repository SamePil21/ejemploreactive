import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useMemo } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

function Mapa({ lat, lng, nombre }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  // Usamos useMemo para que el centro no se recalcule innecesariamente
  const center = useMemo(() => ({ lat: Number(lat), lng: Number(lng) }), [lat, lng]);

  if (loadError) {
    return <div>Error al conectar con Google Maps. Revisa tu API Key en el archivo .env</div>;
  }

  // Esta es la parte más importante: 
  // NO renderizamos nada de GoogleMap hasta que isLoaded sea true
  return isLoaded ? (
    <div>
      <h3>{nombre}</h3>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  ) : (
    <div>Cargando mapa...</div>
  );
}

export default Mapa;