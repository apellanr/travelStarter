import React from 'react';

const card = () => {
    return (
        <div className="container">
            <div className="card" style={{width: 20 + 'rem'}}>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2840%29.jpg" alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">Test Card</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Pls Work</a>
                </div>
            </div>
        </div>
    )
}

export default card;