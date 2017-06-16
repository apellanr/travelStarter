import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import  Build from './build';
import Itinerary from './my_itineraries';

// export default () => {
class Home extends Component{
  render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul>
                    <li><Link to="#">Find Itinerary</Link></li>
                    <li><Link to="/my_itineraries">My Itineraries</Link></li>
                    <li><Link to="/buildsearch/build">Build</Link></li>
                </ul>

                <Route path ="./buildSerach/build" component={Build}/>
                <Route path ="/my_itineraries" component={Itinerary}/>
            </div>
        )
    }
}

export default Home;

