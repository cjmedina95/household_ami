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


// Uses an array of keys starting from 1 (e.g. [1,2,3, ...maxFamilySize]),
// then creates a <TableRow> component for the family size of each key for
// every state.
//
// i.e. key 1 would return the AMI of family size 1 for every state.

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
  
  export default Chart;