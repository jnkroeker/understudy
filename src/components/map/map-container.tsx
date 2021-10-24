import Feature from "ol/Feature";
import Geometry from "ol/geom/Geometry";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import MapWrapper from "./map-wrapper";

export const MapContainer: FunctionComponent = ({}) => {

   // set initial state
   const [features, setFeatures] = useState<Feature<Geometry>[]>([])

   // initialization - retrieve gpx from mock json api
  //  useEffect(() => {
  //    fetch('/14_08_21_Morning_Ride.gpx')
  //      .then(response => response.text())
  //      .then(xmlString => new window.DOMParser().parseFromString(xmlString, "text/xml"))
  //      .then(gpx => {
  //        console.log(gpx)
  //        const wktOptions = {
  //          dataProjection: 'EPSG:4326',
  //          featureProjection: 'EPSG:3857'
  //        }
  //        const parsedFeatures = new GPX().readFeatures(gpx, wktOptions)
 
  //        setFeatures(parsedFeatures)
  //      })
  //  })

  return (
    <MapWrapper features={features}/>
  )
}