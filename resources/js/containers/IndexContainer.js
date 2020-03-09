import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

export default class IndexContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("api/data")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <Left buyers={ items } />
                        </div>
                        <div className="middle-side col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <Middle />
                        </div>
                        <div className="right-side col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <Right buyers={ items }/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<IndexContainer />, document.getElementById('root'));
}