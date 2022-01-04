import GoogleMapReact from 'google-map-react';
import TextSearchResults from '../Texts/TextSearchResults';
import Marker from './Marker';

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
    const defaultProps = {
        center: {
            lat: 28.08382491090474,
            lng: -82.41058214442934
        },
        zoom: 16
    };

    return (
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={createMapOptions}
            >
                {TextSearchResults.map(createLocationEntry)}
            </GoogleMapReact>
        </div>
    )
}

export default Map;