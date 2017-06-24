import React from 'react';

const card = (props) => {
    function handleClick() {
        console.log(props.info)
    }

    return (
        <div className="container">
            <div className="card" style={{width: 20 + 'rem'}}>
                <img className="card-img-top" src={props.img} alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <p className="card-text">{props.tags}</p>
                    <button className="btn btn-primary" onClick={() => handleClick(props)}>Pls Work</button>
                </div>
            </div>
        </div>
    )
}

export default card;