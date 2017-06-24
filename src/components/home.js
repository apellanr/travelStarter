import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import Build from './build';
import Itinerary from './my_itineraries';
import Discover from './discover';
import Data from '../data';
import SearchIcon from './imgs/search.png';
import Drafts from './imgs/notepad.png';
import Publish from './imgs/heart.png';
import Create from './imgs/pencil.png';


class Home extends Component{
  render() {
      console.log ('Data is:', Data);
        return (
            <div>
                <div className="jumbotron profile-hero">
                <div className="jumbo-content">
                    <div className="profile-lead">Hello, Ryan!</div>
                </div>
            </div>
            
            <div className="row icon-container">
                <div className="col-6 ballicon">
                    <Link to="/buildsearch/build"><img src={Create} alt="Create" className="profile-icons"/><br/>Create</Link>
                </div>
                <div className="col-6 ballicon">
                    <Link to="/discover"><img src={SearchIcon} alt="Search" className="profile-icons"/><br/>Discover</Link>
                </div>
                <div className="col-6 ballicon">
                    <Link to="/my_itineraries"><img src={Publish} alt="Saved" className="profile-icons"/><br/>My Trips</Link>
                </div>
                <div className="col-6 ballicon">
                    <img src={Drafts} alt="Drafts" className="profile-icons"/><br/>Drafts
                </div>
            </div>

                <Route path ="./buildsearch/build" component={Build}/>
                <Route path ="./my_itineraries" component={Itinerary}/>
                <Route path ="./discover" component={Discover}/>

            </div>
        )
    }
}

export default Home;

