import { useState, useEffect } from 'react';

function useGeolocation({ lat = null, lng = null }) {
    const [data, setData] = useState({
        error: null,
        loading: true,
        location: {
            lat,
            lng
        }
    })

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            setData(prev => {
                return {
                    ...prev,
                    loading: false,
                    error: 'Geolocation not supported'
                }
            })
        }

        function onSuccess(location) {
            setData(prev => {
                return {
                    error: null,
                    loading: false,
                    location: {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude
                    }
                }
            })
        }

        function onError(error) {
            setData(prev => {
                return {
                    ...prev,
                    loading: false,
                    error: error.message
                }
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return data
}

export default useGeolocation