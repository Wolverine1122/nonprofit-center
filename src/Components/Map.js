import GoogleMapReact from 'google-map-react';
import TextSearchResults from '../Texts/TextSearchResults';
import Marker from './Marker';
import useGeolocation from '../Custom Hooks/useGetLocation';

function createLocationEntry(location, index) {
    return (
        <Marker
            key={index}
            lat={location.latitude}
            lng={location.longitude}
            name={location.name}
        />
    )
}

function createMapOptions(maps) {
    return {
        mapTypeControl: true,
        // gestureHandling: 'greedy' 
        // uncomment this to allow touch-screen users to navigate the map
        // with one finger. Default is auto, which determines if greedy is necessary on the device
    }
}

function Map() {
    const geoLoc = useGeolocation({
        lat: 40.7128,
        lng: -74.0060
    })

    return (
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
                center={geoLoc.location}
                defaultZoom={10}
                options={createMapOptions}
            >
                {TextSearchResults.map(createLocationEntry)}
            </GoogleMapReact>
        </div>
    )
}

export default Map;