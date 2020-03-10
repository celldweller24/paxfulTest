import React, {Component} from 'react';
import Chat from "../components/Chat";
import Buyer from "../components/Buyer";


export default class Right extends Component {
    constructor(props) {
        super(props);
    }

    getMethod(item) {
        return new Set(item.trades.map(trade => trade.method + " | "));
    }

    render() {
        const data = this.props.buyers;

        return (
            <div>
                <h3>Right sidebar</h3>
                <div className="buyer-with-payment-table">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">BiD</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Negative reputation</th>
                            <th scope="col">Positive reputation</th>
                            <th scope="col">Method</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(item => (
                                <Buyer
                                    key={ item.id }
                                    buyer={ item }
                                    lastColumn={ this.getMethod(item) }
                                />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <Chat />
            </div>
        )
    }
};
