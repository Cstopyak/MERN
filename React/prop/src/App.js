
import './App.css';
import PersonComp from './components/PersonComp.js';
import PersonCardComp from './components/PersonCardComp.jsx';

function App() {
  return (
    <div className="App">
      <PersonCardComp name="John Smith" age= "8"  hair="Brown" />
      <PersonCardComp name= "Jane Doe" age="45" hair="black"/>
      <PersonCardComp name= "John Smith" age="88" hair="brown"/>
      <PersonCardComp name= "Mill House" age="10" hair="yellow"/>
      <PersonCardComp name= "Maria Smith" age="43" hair="black"/>
      
    </div>
  );
}

export default App;
