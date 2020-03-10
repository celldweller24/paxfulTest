import React from 'react';

const Trade = ({ currentBuyer }) => {

    const trades = currentBuyer.shift().trades;
    return (
        trades.map(item => (
            <tr key={ item.id }>
                <th scope="row">{ item.id }</th>
                <td>{ item.status ? 'paid' : 'not paid'}</td>
                <td>{ item.hash.slice(20, 25) }</td>
                <td>{ item.amount }</td>
                <td>{ item.method }</td>
            </tr>
        ))
    )
};

export default Trade;