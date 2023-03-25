import './App.css';
import React, { useEffect } from 'react'

function Household({size}) {
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
      <input type="range" min={1} max={size} id="household_input" />
      <p>Household Size: <output id="value"></output></p>
    </div>
  );
}

function Income() {
  function formatAsUSD(number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(number);
  }

  function unformatUSD(value) {
    return parseFloat(value.replace(/[^0-9.]/g, ''));
  }

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
      <input type="text" id="usdInput" placeholder="Enter amount"></input>
    </div>
  )
}

function States({states}) {
  return (
    <div className="step">
      <h2>Step 1: Pick your State</h2>
      <select name="states" id="states">
        {
          states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)
        }
      </select>
    </div>

  );
}

function TableRow({ ami, id }) {
  return (
    <tr>
      <td>{ id }</td>
      {
        ami.map(({value}, index) => <td key={`value-${index}`} className="cell-ami">{value}</td>)
      }
    </tr>
  )
}

function Chart({states}) {
  const maxFamilySize = 8;

  return (
    <div id="ami-chart">
      <table>
        <caption><strong>100% of Area Median Income (AMI)</strong></caption>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            {
              states.map(state => <th key={state.id}>{state.name}</th>)
            }
          </tr>
          <>
            <tr>
              <td rowSpan={maxFamilySize + 1} className="table-side"><strong>Household Size</strong></td>
            </tr>

            {Array.from(Array(maxFamilySize), (_, i) => i + 1).map(key => {
              const ami = states.map(state => ({ value: state.sizes[key] }));
              return <TableRow key={key} ami={ami} id={key} />
            })}
          </>
        </tbody>
      </table>
    </div>

  );
}

function Submit() {
  return (
    <button id="btn-submit">
      Submit
    </button>
  );
}

function Status() {
  return (
    <div id="status">
      /* Eligibility Placeholder */
    </div>
  );
}

function App() {
  const chart = [
    {
      name: "Texas",
      id: 1,
      sizes: {
        1: "$59,710.00",
        2: "$68,240.00",
        3: "$76,770.00",
        4: "$85,300.00",
        5: "$92,124.00",
        6: "$98,948.00",
        7: "$105,772.00",
        8: "$112,596.00"
      }
    },
    {
      name: "Rhode Island", 
      id: 2,
      sizes: {
        1: "$69,510.00",
        2: "$79,440.00",
        3: "$89,370.00",
        4: "$99,300.00",
        5: "$107,244.00",
        6: "$115,188.00",
        7: "$123,132.00",
        8: "$131,076.00"
      }
    },
    {
      name: "Massachusetts",
      id: 3,
      sizes: {
        1: "$84,280.00",
        2: "$96,320.00",
        3: "$108,360.00",
        4: "$120,400.00",
        5: "$130,032.00",
        6: "$139,664.00",
        7: "$149,296.00",
        8: "$158,928.00"
      },
    }
  ]

  return (
    <main>
      <h1>AMI Eligibility Calculator</h1>
      <section id="steps">
        <States states={chart}/>
        <Household size={8}/>        
        <Income />
        <Submit />
        <Status />
      </section>
      <Chart states={chart}/>
    </main>
  );
}

export default App;
