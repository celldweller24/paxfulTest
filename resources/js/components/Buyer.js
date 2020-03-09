import React from 'react';

const Buyer = ({ buyer, trades, onClickHandler }) => {
    return (
        <tr onClick={ onClickHandler ? () => onClickHandler(buyer.id) : null }>
            <th scope="row">{ buyer.id }</th>
            <td>{ buyer.first_name }</td>
            <td>{ buyer.reputation['negative'] }</td>
            <td>{ buyer.reputation['positive'] }</td>
            <td>{ trades
                    ? new Set(trades.map(trade => trade.method + " | "))
                    : buyer.total
                }
            </td>
        </tr>
    )
};

export default Buyer;