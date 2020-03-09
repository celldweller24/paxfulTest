import React from 'react';

const Buyer = ({ buyer, total, handler }) => {
    return (
        <tr onClick={ () => handler(buyer.id) }>
            <th scope="row">{ buyer.id }</th>
            <td>{ buyer.first_name }</td>
            <td>{ buyer.reputation_negative }</td>
            <td>{ buyer.reputation_positive }</td>
            <td>{ total }</td>
        </tr>
    )
};

export default Buyer;