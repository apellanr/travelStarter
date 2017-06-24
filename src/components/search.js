import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import { fetchPlaces } from '../actions';
import noImg from '../components/imgs/no_image_thumb.gif';

class SearchPage extends Component {    
    componentDidMount() {
        console.log('params', this.props);
        this.props.fetchPlaces(this.props.match.params.id);
    }

    list() {
        const city = this.props.match.params.id;

        if(!this.props.poi) {
            return <h1>Loading...</h1>
        }

        return this.props.poi.results.map((place, index) => {
            const image = place.images.length === 0 ? noImg : place.images[0].source_url;
            return <Card key={index} title={place.name} text={place.snippet} img={image} info={place} />
        });
    }

    render() {
        console.log('poi:', this.props.poi);
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1>Search Page</h1>
                <ul className="nav nav-pills nav-justify">
                    <li className="nav-item">
                        <button className="nav-link btn btn-primary">Entertainment</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-warning">Food</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link btn btn-danger">Sightseeing</button>
                    </li>
                </ul>
                <div>
                    {this.list()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        poi: state.cityplaces.poi.data
    }
}

export default connect(mapStateToProps, { fetchPlaces })(SearchPage);