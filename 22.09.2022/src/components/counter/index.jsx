import React, { useState } from 'react';
import './counter.style';

export function Counter({name}) {
    console.log('Counter.render()');
    const [count, setCount] = useState(0);

    // increment the `state.count` value
    function increment() {
        setCount(count + 1);
    }

    return (
        <div className='ui-counter'>
            <p className='ui-counter__title'>Counter Widget</p>

            <div className='ui-counter__body'>
                <p className='ui-counter__body__name'>{name}</p>
                <p className='ui-counter__body__count'>{count}</p>
                <button
                    className='ui-counter__body__button'
                    onClick={() => increment()}
                    disabled={count === 3}
                >Increment</button>
            </div>
        </div>
    );
}