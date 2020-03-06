import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class IndexContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">first</div>
                    <div className="col-md-4">second</div>
                    <div className="col-md-4">third</div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<IndexContainer />, document.getElementById('root'));
}