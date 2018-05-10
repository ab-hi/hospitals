import React, {Component} from 'react';

import Hospital from './hospital';

export default class HospitalList extends Component{
    render(){
        return(
            <div className="card">
                <ul className="collection">
                    {this.props.hospitals.map((item,id) =>
                        {
                            return(
                                <Hospital key= {item.id} id={item.id} name ={item.name} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}