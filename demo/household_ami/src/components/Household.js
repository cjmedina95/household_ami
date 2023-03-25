import React, { useEffect } from 'react'

function Household({size, onChange}) {
    useEffect(() => {
      const value = document.querySelector("#value");
      const input = document.querySelector("#household_input");
      value.textContent = input.value;
      input.addEventListener("input", (e) => {
        value.textContent = e.target.value;
      });
    }, []);
  
    return (
      <div className="step">
        <h2>Step 2: Choose your household size</h2>
        <input type="range" min={1} max={size} defaultValue={1} id="household_input" onChange={onChange}/>
        <p>Household Size: <output id="value"></output></p>
      </div>
    );
  }
  
  export default Household;