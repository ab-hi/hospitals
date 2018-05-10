import React , {Component} from 'react';

export default class FAB extends Component {
    // Floating action button, toggles map view and list view, event is called from  parent component
    render(){
        return(
            <div className="fab" onClick ={this.props.onClick}>
                <i className="circle material-icons">{this.props.type}</i>
            </div>
        )
    }
}