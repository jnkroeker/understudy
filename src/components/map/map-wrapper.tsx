import { FC } from "react";
import { useState, useEffect, useRef } from "react";
import 'tachyons';

// openlayers
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ"; //here...
import GPX from 'ol/format/GPX';

import { fromLonLat } from "ol/proj";
import Geometry from "ol/geom/Geometry";
import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import { Fill, Stroke } from "ol/style";


type HomeProps = { features: any[] };

const MapWrapper: FC<HomeProps> = ({features}) => {
  // set intial state
  const [map, setMap] = useState<Map>();
  const [featuresLayer, setFeaturesLayer] = useState<VectorLayer<any>>();

  // pull refs
  const mapElement = useRef<HTMLDivElement>(null);

  // create state ref that can be accessed in OpenLayers onclick callback function
  //  https://stackoverflow.com/a/60643670
  const mapRef = useRef<{}>();
  mapRef.current = map;

  const style = {
    'Point': new Style({
      image: new CircleStyle({
        fill: new Fill({
          color: 'rgba(255,255,0,0.4)',
        }),
        radius: 5,
        stroke: new Stroke({
          color: '#ff0',
          width: 1,
        }),
      }),
    }),
    'LineString': new Style({
      stroke: new Stroke({
        color: '#f00',
        width: 3,
      }),
    }),
    'MultiLineString': new Style({
      stroke: new Stroke({
        color: '#0f0',
        width: 3,
      }),
    }),
  };

  // initialize map on first render - logic formerly put into componentDidMount
  useEffect(() => {
    // create and add vector source layer
    const initalFeaturesLayer = new VectorLayer({
      source: new VectorSource()
      // source: new VectorSource({
      //   url: "./14_08_21_Morning_Ride.gpx",
      //   format: new GPX(),
      // }),
      // style: 
      // function(feature) {
      //   style['LineString'] //feature.getGeometry().getType()
      // }
    });

    const seoul = [126.97794, 37.56629]; 
    const leesburg = [-77.61983504470808, 39.0904583770794]
    const webMercator = fromLonLat(leesburg);

    // create map
    const initialMap = new Map({
      target: mapElement.current!,
      layers: [
        // Google Maps Terrain
        new TileLayer({
          source: new XYZ({
            url: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
          })
        }),

        initalFeaturesLayer
      ],
      view: new View({
        projection: "EPSG:3857",
        center: webMercator,
        zoom: 0
      }),
      controls: []
    });

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initalFeaturesLayer);
  }, []);

  // update map if features prop changes - logic formerly put into componentDidUpdate
  useEffect(() => {
    if (features.length && featuresLayer) {
      // may be null on first render

      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: features // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      map?.getView().fit(featuresLayer.getSource().getExtent(), {
        padding: [100, 100, 100, 100]
      });
    }
  }, [features]); //featuresLayer, map

  return (
    <div>
      <div ref={mapElement} className="vh-50 map-container"></div>
    </div>
  );
};

export default MapWrapper;
