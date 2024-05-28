import { useEffect } from "react";
import { useMap } from "react-leaflet";

const FlyToMarker = ({ position, zoomLevel }: any) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      
      const zoom = zoomLevel ?? map.getZoom();
      map.flyTo([position[0]+3,position[1]], zoom, {
        duration: 1,
      });
    }
  }, [map, position, zoomLevel]);

  return null;
};

export default FlyToMarker;