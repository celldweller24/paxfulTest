import React from 'react';

const Trade = ({ trades }) => {
    return (
        trades[0]['trades'].map(item => (
            <tr key={ item.id }>
                <th scope="row">{ item.id }</th>
                <td>{ item.status ? 'payed' : 'not payed'}</td>
                <td>{ item.hash.slice(20, 25) }</td>
                <td>{ item.amount }</td>
                <td>{ item.method }</td>
            </tr>
        ))
    )
};

export default Trade;