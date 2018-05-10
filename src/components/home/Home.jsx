//importing necessary react components
import React, {Component} from 'react';
import axios from 'axios';

//importing components for routing
import HospitalList from './hospitalsList';
import FAB from './fab';
import GoogleApiWrapper from './mapView';
import Preloader from '../preploader/preloader';


export default class Home extends Component{

    constructor(props){
        super(props)

        this.state ={
            hospitals :[],
            mapView: false,
            loaded: false,
        }

        //binding event for toggling map view on homepage
        this.toggleMapView = this.toggleMapView.bind(this);
    }

    //deploying API as soon as component is mounted and updating the state
    componentDidMount(){
        axios.get('https://demo2614009.mockable.io/hospitals/list/')
            .then( res => this.setState({
                hospitals : res.data.hospitals,
                loaded: true
            }))
            .catch(err => console.log(err));
    }

    //function for toggling the map view on homepage
    toggleMapView(){
        this.setState(prevState => ({
            mapView:!prevState.mapView
        }));

    }

    render(){
        return(
            <div className="container">
                {
                    //if the reuslt is recieved, the details are shown
                    this.state.loaded && <div>
                        {!this.state.mapView && <HospitalList hospitals={this.state.hospitals}/>}
                        {this.state.mapView && <GoogleApiWrapper no_hospitals={this.state.hospitals.length}/>} 
                        </div>
                }
                
                <FAB onClick={this.toggleMapView} type={this.state.mapView ? 'list_alt': 'my_location' }/>
                
                {/* preloader shown by the time result is received */}
                {!this.state.loaded && <Preloader />}
            </div>

           
            
        )
    }
}

