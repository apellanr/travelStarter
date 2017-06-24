import React, { Component } from 'react';
import { connect } from 'react-redux';

class BuildPage extends Component {
    render() {
        return(
            <div>
                <h1>Build Page</h1>
            </div>
        )
    }
}

export default connect(null)(BuildPage);