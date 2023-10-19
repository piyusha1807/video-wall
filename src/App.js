import { useState } from 'react';
import Content from './Content';
import './App.css';
import LeftPanel from './LeftPanel';

function App() {
 
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);

  const handleChange = (r, c) => {
    setRow(r);
    setCol(c);
  }

  return (
    <div className="App">
   <LeftPanel onChange={handleChange} />
      <Content row={row} col={col}  />
    </div>
  );
}

export default App;
