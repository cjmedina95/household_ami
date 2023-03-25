function Status({eligibility}) {
    if (eligibility === "Eligible") {
      return (
        <div id="status-eligible">
          <h3>✓ Eligible</h3>
          <p>You're eligible to apply for a solar loan with Capital Good Fund!</p>
        </div>
      );
    }
    else if (eligibility === "Ineligible") {
      return (
        <div id="status-ineligible">
          <h3>✗ Ineligible</h3>
          <p>Unfortunately you're ineligible to apply with Capital Good Fund.</p>
        </div>
      );    
    }
    else if (eligibility === "Unknown") {
      return (
        <div id="status-unknown">
          <h3>⚠ Unknown</h3>
          <p>Reach out directly to Capital Good Fund for assistance!</p>
          <p><strong>Reason:</strong> It looks like your AMI is exactly on the threshold.</p>
        </div>
      );   
    }
  }
  
  export default Status;