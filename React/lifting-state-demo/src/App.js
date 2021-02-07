import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';

function App() {
  const [superList, setSuperList] = useState([]);
  const addSuper = newEntry =>{
    setSuperList([...superList, newEntry])
  }
  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-sm-6">
          <Form newSuper={addSuper} />
        </div>

        <div className="col-sm-6">
          <Results allSupers={superList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
