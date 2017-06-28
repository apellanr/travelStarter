import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import Build from './build';
import Search from './search';
import Footer from './footer';

class BuildSearch extends Component {
    searchLink() {
        if(addressArray[2] === 'build') {
            return(
                <Link className="nav-link" to={`/buildsearch/search/${this.props.match.params.id}/${this.props.currentSearchPage[0]}/${this.props.currentSearchPage[1]}`}>Search</Link>
            )
        }
        return(
            <Link className="nav-link" to={`/buildsearch/search/${this.props.match.params.id}`}>Search</Link>
        )
    }
    
    render() {
        console.log('buildsearch redux:', this.props.currentSearchPage)
        const addressArray = this.props.match.url.split('/');
        console.log('params', this.props);

        return(
            <div className='buildsearchpage'>
                <h1>Build/Search Page</h1>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        {this.searchLink()}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/buildsearch/build/${this.props.match.params.id}`}>Build</Link>
                    </li>
                </ul>

                <Route path="/buildsearch/build/:id" component={Build}/>
                <Route path="/buildsearch/search/:id" component={Search}/>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentSearchPage: state.currentPage.page
    }
}

export default connect(mapStateToProps)(BuildSearch);

