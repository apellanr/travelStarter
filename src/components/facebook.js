'use strict';

import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    
    responseFacebook(response) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin 
                appId='1460312270674459'
                autoLoad = {true}
                version = 'v2.8'
                fields='first_name,last_name,email,gender,age_range,picture'
                scope="public_profile,email"
                callback={this.responseFacebook}
            />
        )
    }
}

export default Facebook;