import React, { Component } from 'react';
import { requestApiData } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

class IndexContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        const items = this.props.data;
        if (Array.isArray(items)) {
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
        else {
            return (
              <div>Loading...</div>
          )
        }
    }
}

const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);