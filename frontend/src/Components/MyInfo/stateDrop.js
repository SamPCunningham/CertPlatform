import React from 'react';
import data from './allstate.json';

const StateDrop = () => {

    return (
        <div >
            <select>
                {data.map(item => (
                    <optgroup label={item.country}>
                        {item.states.name.map((x, i) => (
                            <option key={x} value={item.states.value[i]}>{x}</option>
                        ))}
                    </optgroup>
                ))}
            </select> 
        </div>
     );
}


export default StateDrop;

