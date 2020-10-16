import React, { Component } from 'react';

var perf =require('./index.html');

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (          <iframe src={perf }></iframe>   /* like this */
            );
    }
}
 
export default Template;