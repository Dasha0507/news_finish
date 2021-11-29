import React from 'react';
import './subscriptions.css';


function Subscriptions({items, activeSubscription, onClickSubscription}) {

    return (
       
        <ul>
            {items.map((name, index) => (
                <li 
                onClick={() => onClickSubscription(index)}
                key={`${name}_${index}`} 
                className={activeSubscription === index ? 'subscription active ' : 'subscription'}
                >
                    {name}
                </li>
            ))
            }
        </ul>
    
      
    )
}

export default Subscriptions



