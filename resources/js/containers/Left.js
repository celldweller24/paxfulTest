import React, {Component} from 'react';
import Buyer from '../components/Buyer';
import Trade from '../components/Trade';

export default class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBuyer: ''
        };
    }

    setCurrentBuyer(buyerId) {
        this.setState({ currentBuyer: buyerId })
    }

    render() {
        const buyers = this.props.buyers;
        const isCurrentBuyer = this.state.currentBuyer;

        return (
            <div>
                <div className="buyer-table">
                    <h3>Buyers</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">BiD</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Negative reputation</th>
                            <th scope="col">Positive reputation</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            buyers.map(item => (
                                <Buyer
                                    buyer={ item }
                                    key={ item.id }
                                    total={ item.trade.length }
                                    handler={ this.setCurrentBuyer.bind(this) }
                                />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className="trade-tabel">
                    <h3>Trades</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">TiD</th>
                            <th scope="col">Status</th>
                            <th scope="col">Hash</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Method</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            buyers.map(item => (
                                isCurrentBuyer && isCurrentBuyer === item.id
                                    ? <Trade key={ item.id } trade={ item.trade } />
                                    : null
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}