import './App.css';
import { unformatUSD } from './helpers/FormatUSD';
import States from './components/States'
import Household from './components/Household'
import Income from './components/Income'
import Chart from './components/Chart'
import Status from './components/Status'
import Submit from './components/Submit'
import React, { useState } from 'react'

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

  const [stateChoice, setStateChoice] = useState(chart[0].name);
  const [houseSize, setHouseSize] = useState(1);
  const [income, setIncome] = useState(NaN);
  const [eligibility, setEligibility] = useState(undefined);

  const handleStateChange = (event) => {
    setStateChoice(event.target.value);
  }

  const handleSizeChange = (event) => {
    setHouseSize(event.target.value);
  }

  const handleIncomeChange = (event) => {
    setIncome(unformatUSD(event.target.value));
  }

  return (
    <main>
      <h1>AMI Eligibility Calculator</h1>
      <section id="steps">
        <States states={chart} onChange={handleStateChange}/>
        <Household size={8} onChange={handleSizeChange}/>        
        <Income onChange={handleIncomeChange}/>
        <Submit state={stateChoice} 
                size={houseSize} 
                income={income} 
                setEligibility={setEligibility}
                chart={chart}/>
        <Status eligibility={eligibility}/>
      </section>
      <Chart states={chart}/>
    </main>
  );
}

export default App;
