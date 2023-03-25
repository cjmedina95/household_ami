function States({states, onChange}) {
    return (
      <div className="step">
        <h2>Step 1: Pick your State</h2>
        <select name="states" id="states" onChange={onChange}>
          {
            states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)
          }
        </select>
      </div>
  
    );
  }

  export default States;