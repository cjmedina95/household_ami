import './App.css';

function Dropdown({states}) {
  return (
    <select name="states" id="states">
      {
        states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)
      }
    </select>
  );
}

function TableRow({ keyValues }) {
  return (
    <tr>
      <td>{ keyValues[0].key }</td>
      {
        keyValues.map(({value}, index) => (
          <>
            <td key={`value-${index}`} className="cell-ami">{value}</td>
          </>
        ))
      }
    </tr>
  )
}

function Chart({states}) {
  const maxFamilySize = 8;

  return (
    <table>
      <caption><strong>100% of Average Median Income (AMI)</strong></caption>
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
            <td rowSpan={maxFamilySize + 1} className="table-side">Household Size</td>
          </tr>

          {Array.from(Array(maxFamilySize), (_, i) => i + 1).map(key => {
            const keyValues = states.map(state => ({
              key,
              value: state.sizes[key]
            }));

            return <TableRow key={key} keyValues={keyValues} />
          })}
        </>
      </tbody>
    </table>
  );
}

function App() {
  let chart = [
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
      }
    }
  ]

  return (
    <div>
      <h1>Household AMI Calculator</h1>
      <Dropdown states={chart}/>
      <Chart states={chart}/>
    </div>
  );
}

export default App;
