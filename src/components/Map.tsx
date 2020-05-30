import React from 'react';
import DeckGL from '@deck.gl/react';
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { HexagonLayer , HeatmapLayer } from "@deck.gl/aggregation-layers";
import { GeoJsonLayer, ScatterplotLayer, IconLayer, LineLayer} from "@deck.gl/layers";
import { StaticMap } from 'react-map-gl';
import { makeStyles } from '@material-ui/core';
import data from '../data.json';
import data2 from '../data2.json';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZGVhaCIsImEiOiJja2F0em5heGkwaHphMnNtanZxcTExYzhyIn0.Z-gXx014ZYmSU9DPj6rgiQ';

// Initial viewport settings @TODO Autodetect location
const initialViewState = {
  longitude: data[0].Longitude,
  latitude: data[0].Latitude,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

const layers = [
  // new LineLayer({id: 'line-layer', data}),
  // new ScatterplotLayer({
  //   id: "scatter",
  //   data,
  //   opacity: 0.95,
  //   filled: true,
  //   radiusMaxPixels: 1000,
  //   getRadius: 10,
  //   radiusScaleradiusScale: 15,
  //   getPosition: d => [d.Longitude, d.Latitude],
  // }),
  // new HexagonLayer({
  //   id: 'hexagon-layer',
  //   data,
  //   pickable: true,
  //   extruded: true,
  //   radius: 400,
  //   elevationScale: 4,
  //   getPosition: d => [d.Longitude, d.Latitude],
  // }),
  new HeatmapLayer({
    id: 'heatmapLayer',
    getPosition: d => [d.Longitude, d.Latitude],
    getWeight: d => 10
  })
];

const useStyles = makeStyles(() => ({
  example: {
    height: '400px',
    width: '400px'
  },
}));

const Map = () => {
  const styles = useStyles();

  console.log(data.length);

  return (
    <div className={styles.example}>
      <DeckGL
        initialViewState={initialViewState}
        controller
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    </div>
  );
}

export default Map;
