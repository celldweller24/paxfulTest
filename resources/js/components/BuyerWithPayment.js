import React from 'react';

const BuyerWithPayment = ({ buyer, trades }) => {
    return (
        <tr>
            <th scope="row">{ buyer.id }</th>
            <td>{ buyer.first_name }</td>
            <td>{ buyer.reputation_negative }</td>
            <td>{ buyer.reputation_positive }</td>
            <td>
                {/* set unique peyment method values  */}
                { new Set(trades.map(trade => trade.method + " | ")) }
            </td>
        </tr>
    )
};

export default BuyerWithPayment;