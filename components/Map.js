import { useState, version } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/alaminhossainim/clcss9st1000c15o75rtnuleh"
      mapBoxApiAccessToken={process.map_api_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGl>
  );
};

export default Map;
