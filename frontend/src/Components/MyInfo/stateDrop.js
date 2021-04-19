import React from 'react';
import data from './states.json';

const StateDrop = () => {

    return (
        <div >
            <select>
                <optgroup label="U.S.A">
                    {data.map(state => (
                    <option key={state.value} value={state.value}>{state.name}</option>
                ))}
                </optgroup>
            </select> 
        </div>
     );
}
 
export default StateDrop;

