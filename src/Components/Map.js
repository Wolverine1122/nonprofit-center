import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const defaultProps = {
        center: {
            lat: 40.7128,
            lng: -74.0060
        },
        zoom: 11
    };

    return (
        <div className='google-map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={27.947420}
                    lng={-82.458778}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;