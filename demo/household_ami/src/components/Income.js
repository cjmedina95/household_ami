import React, { useEffect } from 'react'
import { formatAsUSD, unformatUSD } from './../helpers/FormatUSD';

function Income({onChange}) {
    useEffect(() => {
      const usdInput = document.getElementById('usdInput');
  
      usdInput.addEventListener('input', (event) => {
        const unformattedValue = unformatUSD(event.target.value);
        const formattedValue = formatAsUSD(unformattedValue);
        event.target.value = formattedValue;
        if (event.target.value === '$NaN') { event.target.value = ""}
        event.target.setSelectionRange(formattedValue.length, formattedValue.length);
      });
  
      usdInput.addEventListener('keypress', (event) => {
        const charCode = event.key;
        if (!(charCode >= '0' && charCode <= '9') && charCode !== '.' && charCode !== ',') {
          event.preventDefault();
        }
      });
    }, []);
  
    return (
      <div className="step">
        <h2>Step 3: Enter your annual income</h2>
        <input type="text" id="usdInput" placeholder="Enter amount" onInput={onChange}></input>
      </div>
    )
  }

  export default Income;