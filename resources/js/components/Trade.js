import React from 'react';

const Trade = ({ trade }) => {
    return (
        trade.map(item => (
            <tr key={ item.id }>
                <th scope="row">{ item.id }</th>
                <td>{ item.status ? 'payed' : 'not payed'}</td>
                <td>{ item.hash.slice(20, 25) }</td>
                {/* Can be replaced by exchange conversion function */}
                <td>{ item.amount }</td>
                <td>{ item.method }</td>
            </tr>
        ))
    )
};

export default Trade;