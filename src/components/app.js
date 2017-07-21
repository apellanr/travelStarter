import React from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import './app.css';
import Navbar from './navbar';
import Home from './home';
import BuildSearch from './buildsearch';
import SavedItineraries from './my_itineraries';
import FindItin from './discover';
import BuildSearchCitySelect from './buildsearchcityselect';
import LoginPage from './login_page';
import Signup from './signup';
import DraftPage from './draft';
import Splash from './splash';


const nav_links = [
    {
        title: 'Home',
        path: '/home'
    },
    {
        title: 'Destinations',
        path:'/destinations'
    },
    {
        title: 'Discover',
        path:'/discover'
    },
    {
        title: 'Itinerary',
        path: '/my_itineraries'
    },
    {
        title: 'About',
        path: '/about'
    }
];

function navbarComp() {
    return(
        <Navbar links={nav_links} brand="travelStarter"/> 
    )
}

const App = () => (
    <div>
        <div>
            <Route path="/:anywhere" component={navbarComp} />
            <Route exact path="/" component={Splash} />
            <Route path="/home" component={Home} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={Signup} />
            <Route path="/buildsearch/cityselect" component={BuildSearchCitySelect} />
            <Route path="/buildsearch/search/:id" component={BuildSearch} />
            <Route path="/buildsearch/build/:id" component={BuildSearch} />
            <Route path="/my_itineraries" component={SavedItineraries}/>
            <Route path="/discover" component={FindItin} />
            <Route path="/draft" component={DraftPage}/>
        </div>
    </div>
);

export default App;
