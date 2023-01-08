import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './component/Map.css'

const mapContainer = useRef(null);       //MapBox Container
const map = useRef(null);                //MapBox rendered element
const [lng, setLng] = useState(77.378);  //Longitude
const [lat, setLat] = useState(28.624);  //Latitude
const [zoom, setZoom] = useState(12);    //Zoom Level
const start = [lng, lat];                //Initial Directions

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    route();

  }, [map.current]);

  const locate = () => {
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        style: {
          right: 10,
          top: 10
        },
        position: 'bottom-left',
        showUserHeading: true
      })
    );
  }

  const route = () => {
    locate();
    map.current.on('load', () => {
        map.current.addLayer({
            id: 'point',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: start
                        }
                    }]
                }
            },
            paint: {
                'circle-radius': 10,
                'circle-color': '#3887be'
            }
        });
    });
  }
  map.current.on('click', (event) => {
    const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
    const end = {
	type: 'FeatureCollection',
	features: [{
		type: 'Feature',
		properties: {},
		geometry: {
			type: 'Point',
			coordinates: coords
		}
	}]
};
        getRoute(coords);
    });
    if (map.current.getLayer('end')) {
        map.current.getSource('end').setData(end);
    } else {
        map.current.addLayer({
            id: 'end',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: coords
                        }
                    }]
                }
            },
            paint: {
                'circle-radius': 10,
                'circle-color': '#f30'
            }
        });
    }

    async function getRoute(end) {
        const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
          { method: 'GET' }
        );
    
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        if (map.current.getSource('route')) {
            map.current.getSource('route').setData(geojson);
        }
       
        else {
            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: geojson
                },
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#3887be',
                    'line-width': 5,
                    'line-opacity': 0.75
                }
            });
        }
      }
      const instructions = document.getElementById('instructions');
      const steps = data.legs[0].steps;
     
      let tripInstructions = '';
      for (const step of steps) {
          tripInstructions += `<li>${step.maneuver.instruction}</li>`;
      }
      instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
           data.duration / 60
         )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
