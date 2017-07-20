import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../data';
import { viewCurrentDraft, removePlace } from '../actions';

class BuildPage extends Component {
    componentDidMount() {
        this.props.viewCurrentDraft('59652a8f8fecca0011c95758');
    };

    handleDelete(place) {
        this.props.removePlace(place).then(() => this.props.viewCurrentDraft('59652a8f8fecca0011c95758'));
    };

    list() {
        if(!this.props.currentDraft) {
            return(
                <div>
                    Loading...
                </div>
            )
        }

        return this.props.currentDraft.itin.places.map((place, index) => {
            return(
                <div className="card" key={index}>
                    <div className="card-header"><h4>{place.name}</h4></div>
                <div className="card-block">
                    <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                    <p className="card-text">{place.snippet}</p>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(place)}>Remove</button>
                </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <h2 className="text-center">Added Items</h2>
                <div>
                     {this.list()} 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentDraft: state.currentDraft.currentDraft
    }
}

export default connect(mapStateToProps, { viewCurrentDraft, removePlace })(BuildPage);