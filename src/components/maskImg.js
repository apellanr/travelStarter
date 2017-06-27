import React from 'react';

let style = {
    'backgroundImage' : 'url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg)',
}

const MaskImg = (props) => {
    return (
        <div className="jumbotron city-jumbo"  style={style}>
            <div className="jumbo-content">
                <h1 className="display-4 text-center">{props.header}</h1>
                <p className="lead">discover your next adventure</p>
                <p className="lead">
                    <a className="btn btn-secondary btn-lg" href="#" role="button">Discover More</a>
                </p>
            </div>
            
        </div>
    )
}

export default MaskImg;