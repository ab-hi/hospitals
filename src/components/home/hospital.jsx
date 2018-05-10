import React , {Component} from 'react';

import {Link} from 'react-router-dom';

//component for each Hopital element in hospitals list

export default class Hospital extends Component{

    render(){
        return(
            /* Routing to Detailed component for each hospital and passing the required parameters */
            <Link to={{pathname : `/hospitals/HospitalDetails/${this.props.id}`, state: {id: this.props.id}}} className="collection-item avatar">
              <i className="circle material-icons" >local_hospital</i>
              <span className="title">{this.props.name}</span>
              <p>
                 (click to view details)
              </p>
              <span className="secondary-content"><i className="material-icons">arrow_forward
                </i></span>
            </Link>
        )
    }
}