import { unformatUSD } from './../helpers/FormatUSD';

// Eligibility is calculated once the submit button is pressed.
// The ami is retrieved from the array of state objects in App.js.
function Submit({state, size, income, setEligibility, chart}) {
    function checkEligibility(state, size, income) {
      const selectedState = chart.filter(obj => obj.name === state)[0];
      const ami = unformatUSD(selectedState['sizes'][`${size}`]);
  
      if (income < ami) {
        return "Eligible";
      }
      else if (income > ami) {
        return "Ineligible";
      }
      else if (income === ami) {
        return "Unknown";
      }
      else {
        return "Undefined";
      }
    }
  
    const submitButton = () => { setEligibility(checkEligibility(state, size, income)); }
  
    return (
      <button id="btn-submit" onClick={ submitButton }>
        Submit
      </button>
    );
  }

  export default Submit;