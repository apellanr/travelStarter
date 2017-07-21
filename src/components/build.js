import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import data from '../data';
import { viewCurrentDraft, removePlace, editTitleTrue, editTitleFalse, editTitleText } from '../actions';

class BuildPage extends Component {
    componentDidMount() {
        this.props.viewCurrentDraft(this.props.itinId);
    };

    handleDelete(place) {
        this.props.removePlace(place, this.props.itinId).then(() => this.props.viewCurrentDraft(this.props.itinId));
    };

    list() {
        if(!this.props.currentDraft) {
            return(
                <div>Loading...</div>
            )
        }

        return this.props.currentDraft.itin.places.map((place, index) => {
            const { value } = place.properties[1];
            return(
                <div className="card" key={index}>
                    <div className="card-header"><h4>{place.name}</h4></div>
                <div className="card-block">
                    <h6 className="card-subtitle mb-2 text-muted">{ value }</h6>
                    <p className="card-text">{place.snippet}</p>
                    <button className="btn btn-danger" onClick={() => this.handleDelete(place)}>Remove</button>
                </div>
                </div>
            )
        })
    }

    handleTrueToggle() {
        this.props.editTitleTrue();
    }

    handleEdit(val) {
        this.props.editTitleText(val, this.props.itinId).then(() => this.props.editTitleFalse()).then(() => this.props.viewCurrentDraft(this.props.itinId))
    }

    renderField(field) {
        return(
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control form-control-danger'
                    {...field.input}
                />
            </div>
        )
    }

    title() {
        const { handleSubmit } = this.props;

        if(!this.props.currentDraft) {
            return <h2 className='text-center'>Loading...</h2>
        }

        return(
            <div>
                 {!this.props.editTitle.editTitle 
                    ? <h2 className="text-center">{this.props.currentDraft.itin.name}<button className='btn btn-outline-warning' onClick={() => this.handleTrueToggle()}>Edit</button></h2> 
                    : <div><Field name='name' component={this.renderField}/><button className='btn btn-outline-success' onClick={handleSubmit((val) => this.handleEdit(val))}>Save</button><button className='btn btn-outline-default' onClick={() => this.props.editTitleFalse()}>Cancel</button></div>} 
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.title()}
                <div>
                     {this.list()} 
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentDraft: state.currentDraft.currentDraft,
        editTitle: state.editTitle,
        itinId: state.itinId.itinId.data._id,
        initialValues: !state.currentDraft.currentDraft ? {} : {
            name: state.currentDraft.currentDraft.itin.name
        }
    }
}

BuildPage = reduxForm({
    form: 'edit_title_form',
    enableReinitialize: true
})(BuildPage);

export default connect(mapStateToProps, { viewCurrentDraft, removePlace, editTitleTrue, editTitleFalse, editTitleText })(BuildPage);