import React ,{ Component} from 'react';
import axios from 'axios';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

//Map view for showing all hospitals on college with marker

export class MapView extends Component {

    constructor(props){
        super(props)

        this.state = {
            markers : []
        }

    }

    /* calling details API repeatedly for number of hospitals to fetch position of each hospital and updating the state markers array */
    componentDidMount(){
        for(var i = 1; i <= this.props.no_hospitals; i++){
            axios.get(`https://demo2614009.mockable.io/hospitals/detail/${i}/`)
            .then(res =>{ 
                this.state.markers.push( res.data );
                this.setState({loaded :true}); 
                }
            )
            .catch(err=> console.log(err)
            )
        }        
    }

    render(){
        return(
            <div className = "MapWrapper">
            <Map
            google={this.props.google}
            style={{width: '100%', height : '100%'}}
            initialCenter= {{
                lat: 28.637140 ,
                lng:  77.168955,
              }}           
            zoom={12}
            
          >
          {this.state.markers.map((item ,i ) => {
              return(
                <Marker position={{lat: item.lat,
                    lng:  item.lng}} />
              )
          })}
            
          </Map>
          </div>
        )
    }
}

//using Google map api and passing required properties

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey,
      no_hospitals : props.no_hospitals
    }
  ))(MapView)
