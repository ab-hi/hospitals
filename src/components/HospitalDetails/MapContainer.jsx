import React ,{ Component} from 'react';

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {

    render(){
        return(
            <div  className="MapWrapperDetails">
            <Map
            google={this.props.google}
            style={{width: '100%', height : '100%'}}
            initialCenter= {{
                lat: this.props.lat,
                lng: this.props.lng,
              }}
           
            zoom={15}
            
          >
            <Marker position={{lat: this.props.lat,
                lng: this.props.lng,}}/>
          </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey,
      lat: props.lat,
      lng : props.lng
    }
  ))(MapContainer)
