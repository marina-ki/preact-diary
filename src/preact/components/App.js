import { h } from  'preact'
import { useState } from 'preact/hooks'
import List from './List'

const App = () => {
    const [dataArray, setDataArray] = useState(['Item 0', 'Item 1', 'Item 2'])

    return <div>
        <List data={dataArray} />
        <button style={buttonStyle} onClick={() => setDataArray(dataArray => [...dataArray, `Item ${dataArray.length}`])}>add item</button>
    </div>
}

const buttonStyle = `
    border: solid 1px red;
    background-color: orange;
    padding: 0.5rem;
    font-size: 1rem;
`

export default App
