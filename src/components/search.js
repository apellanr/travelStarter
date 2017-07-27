import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Link,
    Route
 } from 'react-router-dom';
import _ from 'lodash';
import { fetchPlaces, currentPage, clearPlaces } from '../actions';
import SearchList from './searchlist';
import ReactDOM from 'react-dom';

class SearchPage extends Component {
    componentDidUpdate(prevProps){
        if (this.props.location !== prevProps.location) {
            const elem = ReactDOM.findDOMNode(this.refs.searchBtns);
            elem.scrollIntoView(true);
        }
    }

    replaceUnderscore(city) {
        return _.replace(city, '_', ' ');
    }

    handleClick(query) {
        this.props.clearPlaces();
        this.props.currentPage(1);
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div ref='searchBtns'>
               <div className="card trip-card" style={{'marginTop': '1vh'}}>
                    <img className={`card-img-top ${this.props.match.params.id}`}/>
                    <div className="card-block trip-block">
                        <h5 className="text-center">Trip to {this.replaceUnderscore(this.props.match.params.id)}</h5>
                    </div>
                </div>
                <ul className="nav nav-pills nav-justify filter-container">
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/entertainment/1`} className="nav-link btn btn-primary" onClick={() => this.handleClick('nightlife')}><i className="material-icons filter-btns">local_bar</i>Drinks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/food/1`} className="nav-link btn btn-warning" onClick={() => this.handleClick('eatingout')}><i className="material-icons filter-btns">local_dining</i>Dining</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/buildsearch/search/${this.props.match.params.id}/sightseeing/1`} className="nav-link btn btn-danger" onClick={() => this.handleClick('sightseeing')}><i className="material-icons filter-btns">directions_walk</i>Sights</Link>
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

export default connect(mapStateToProps, { fetchPlaces, currentPage, clearPlaces })(SearchPage);