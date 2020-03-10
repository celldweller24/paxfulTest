import React from 'react';

const Buyer = ({ buyer, trades, onClickHandler }) => {
    const firstname = buyer.first_name;
    const negativeReputation = buyer.reputation['negative'];
    const positiveReputation = buyer.reputation['positive'];
    const method = trades
        ? new Set(trades.map(trade => trade.method + " | "))
        : buyer.total;

    return (
        <tr onClick={ onClickHandler ? () => onClickHandler(buyer.id) : null }>
            <th scope="row">{ buyer.id }</th>
            <td>{ firstname }</td>
            <td>{ negativeReputation }</td>
            <td>{ positiveReputation }</td>
            <td>{ method }
            </td>
        </tr>
    )
};

export default Buyer;