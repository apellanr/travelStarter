import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import  Build from './build';
import Itinerary from './my_itineraries';
import Discover from './discover';
import Data from '../data';


class Home extends Component{
  render() {
      console.log ('Data is:', Data);
        return (
            <div>
                <h1>Home Page</h1>
                <ul>
                    <li><Link to="/discover">Find Itinerary</Link></li>
                    <li><Link to="/my_itineraries">My Itineraries</Link></li>
                    <li><Link to="/buildsearch/build">Build</Link></li>
                    <li><Link to="/buildsearch/cityselect">Build City Select</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home;

