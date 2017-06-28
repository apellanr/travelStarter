import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Link,
    Route
 } from 'react-router-dom';
import _ from 'lodash';
import { fetchPlaces, currentPage } from '../actions';
import SearchList from './searchlist';

class SearchPage extends Component {    
    // componentDidMount() {
    //     console.log('params', this.props);
    //     this.props.fetchPlaces(this.props.match.params.id);
    // }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
        }
    }

    replaceUnderscore(city) {
        return _.replace(city, '_', ' ');
    }

    handleClick(query) {
        this.props.poi = null;
        //this.props.fetchPlaces(this.props.match.params.id, query);
        this.props.currentPage(1);
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1>Discover {this.replaceUnderscore(this.props.match.params.id)}!</h1>
                <ul className="nav nav-pills nav-justify">
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/entertainment/1`} className="nav-link btn btn-primary" onClick={() => this.handleClick('nightlife')}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/food/1`} className="nav-link btn btn-warning" onClick={() => this.handleClick('eatingout')}>Food</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/sightseeing/1`} className="nav-link btn btn-danger" onClick={() => this.handleClick('sightseeing')}>Sightseeing</Link>
                    </li>
                </ul>
                <div>
                    <Route path={`/buildsearch/search/${this.props.match.params.id}/:searchQuery/:page`} component={SearchList} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        poi: state.cityplaces.poi.data,
        currentSearchPage: state.currentPage.page
    }
}

export default connect(mapStateToProps, { fetchPlaces, currentPage })(SearchPage);