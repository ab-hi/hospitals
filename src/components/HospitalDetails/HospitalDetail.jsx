import React , {Component} from 'react';

import axios from 'axios';

import GoogleApiWrapper from './MapContainer';

export default class HospitalDetail extends Component{

    constructor(props){
        super(props)

        this.state= this.props.location.state;
    }

    // consuming api for fetching details of each hospital using the specied ID
    componentDidMount  = () =>{
        axios.get(`https://demo2614009.mockable.io/hospitals/detail/${this.state.id}/`)
            .then(res =>{ 
                this.setState(  res.data );
                this.setState({loaded :true}); 
                }
            )
            .catch(err=> console.log(err)
            )
    }

    render(){
        return(
            <div className="container-fluid">
                <h1 className = "header center orange-text">{this.state.name}</h1>
                <div className="row">
                        <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                                <div className="card-content white-text" id="map">
                                <span className="card-title text-left">Address</span>
                                <p>{this.state.address}</p>
                                                              
                                </div>
                                
                            </div>
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                <span className="card-title text-left">Training Session</span>

                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                        </tr>
                                        {  this.state.loaded && this.state["training sessions"].map((item,key) => {
                                                return(
                                                    <tr key={key}>
                                                        <td>{item.name}</td>
                                                        <td>{item.start_date}</td>
                                                        <td>{item.end_date}</td>
                                                    </tr>
                                                )
                                            })}
                                           
                                        
                                           
                                    </tbody>
                                    
                                </table>
                                </div>
                               
                            </div>

                           
                        </div>

                         <div className="col s12 m6">
                         {/* plotting the google app */}
                         <GoogleApiWrapper apiKey="AIzaSyA7-XiSE26yWofo9OO0Za34DrgU5q775o4" lat = {this.state.lat} lng = {this.state.lng} />
                        </div>
                </div>
            </div>
            
        )
    }
}