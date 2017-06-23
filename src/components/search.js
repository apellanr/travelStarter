import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import { Field, reduxForm } from 'redux-form';
import data from '../data';

class SearchPage extends Component {
    list() {
        return data.recommendations.map((place, index) => {
            return <Card key={index} title={place.name} text={place.snippet} img={place.images[0].source_url} />
        });
    }

    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <input
                    className='form-control'
                    type={field.type}
                    { ...field.input }
                />
                <div className='form-control-feedback'>
                    { field.meta.touched ? field.meta.error : '' }
                </div>
            </div>
        )
    }

    onSubmit(val) {
        console.log(val);
    }

    render() {
        console.log(data.recommendations);
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1>Search Page</h1>
                <form onSubmit={handleSubmit((val) => { this.onSubmit(val) })}>
                    <div>
                        <Field 
                            name='searchPage'
                            type='text'
                            component={this.renderField}
                        />
                        <span className='input-group-btn'>
                            <button className='btn btn-secondary' type='submit'>Submit</button>
                        </span>
                    </div>
                </form>
                <div>
                    {this.list()}
                </div>
            </div>
        )
    }
}

function validate(val) {
    const errors  ={};

    if(!val.searchPage) {
        errors.searchPage = 'Please enter a search term.'
    }

    return errors;
}

SearchPage = reduxForm({
    form: 'searchForm',
    validate
})(SearchPage);

export default connect(null)(SearchPage);