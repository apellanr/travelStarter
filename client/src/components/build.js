import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { viewCurrentDraft, removePlace, editTitleTrue, editTitleFalse, editTitleText, publishItin } from '../actions';

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

            function address() {
                if(place.properties.length <= 1) {
                    return 'No Address Provided'
                }

                const { value } = place.properties[1];
                return value;
            }

            return(
                <div className="card" key={index}>
                    <div className="card-header"><h4>{place.name}</h4></div>
                <div className="card-block">
                    <h6 className="card-subtitle mb-2 text-muted">{address()}</h6>
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

    handleSave() {
        console.log(this.props.currentDraft)
        this.props.publishItin(this.props.currentDraft, this.props.itinId).then(() => {
            this.props.history.push('/my_itineraries')
        })
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
            <div style={{'marginBottom': '1vh'}}>
                 {!this.props.editTitle.editTitle 
                    ? <div className='text-center'><h2>{this.props.currentDraft.itin.name}</h2><button className='btn btn-outline-warning' onClick={() => this.handleTrueToggle()}>Edit</button><button className='btn btn-outline-success' onClick={() => {this.handleSave()}}>Publish</button></div>
                    : <div className='text-center'><Field name='name' component={this.renderField}/><button className='btn btn-outline-success' onClick={handleSubmit((val) => this.handleEdit(val))}>Save</button><button className='btn btn-outline-danger' onClick={() => this.props.editTitleFalse()}>Cancel</button></div>} 
            </div>
        )
    }

    render() {
        return(
            <div style={{'marginTop': '1vh'}}>
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

export default connect(mapStateToProps, { viewCurrentDraft, removePlace, editTitleTrue, editTitleFalse, editTitleText, publishItin })(BuildPage);