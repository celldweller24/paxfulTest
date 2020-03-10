import React from 'react';

const Buyer = ({ buyer, lastColumn, onClickHandler = () => false }) => {
    const firstname = buyer.first_name;
    const negativeReputation = buyer.reputation['negative'];
    const positiveReputation = buyer.reputation['positive'];

    return (
        <tr onClick={ () => onClickHandler(buyer.id) }>
            <th scope="row">{ buyer.id }</th>
            <td>{ firstname }</td>
            <td>{ negativeReputation }</td>
            <td>{ positiveReputation }</td>
            <td>{ lastColumn }</td>
        </tr>
    )
};

export default Buyer;