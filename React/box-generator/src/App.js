import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxForm from './Components/BoxForm';
import BoxDisplay from './Components/BoxDisplay';
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
            <BoxForm newSuper={addSuper}/>
            </div>
            <div className="col-sm-6">
              {
            superList.map((bxitem) =>{
              return <BoxDisplay box={bxitem} />
            })
          
              }
        </div>
      </div>
    </div>
  );
}

export default App;
