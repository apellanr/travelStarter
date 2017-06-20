import React from 'react';

const card = (props) => {
    return (
        <div className="container">
            <div className="card" style={{width: 20 + 'rem'}}>
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Pls Work</a>
                </div>
            </div>
        </div>
    )
}

export default card;