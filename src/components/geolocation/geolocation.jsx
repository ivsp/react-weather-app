import {ReactComponent as GeoButton} from "./../../icons/geolocation.svg" 


function MyGeolocation(props) {
    return (
    
      // <button type="submit" onClick={props.onClick}>Geolocalizame</button>
      <GeoButton className="geolocation" onClick={props.onClick}></GeoButton>

    )
}

export default MyGeolocation;