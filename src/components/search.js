import React, { Component } from 'react';
import Card from './card';
import data from '../data';

export default () => {
    const list = data.recommendations.map((place, index) => {
        return <Card key={index} title={place.name} text={place.snippet} img={place.images[0].source_url} />
    });
    console.log(data.recommendations);
    return(
        <div>
            <h1>Search Page</h1>
                {list}
        </div>
    )
}
