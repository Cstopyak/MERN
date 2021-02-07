import logo from './logo.svg';
import './App.css';
import PersonCardComp from './components/PersonCardComp.jsx';
function App() {
  return (
    <div className="App">
      <PersonCardComp name= "Jane Doe" age={43} hair="black"/>
      <PersonCardComp name= "John Smith" age={88} hair="brown"/>
    </div>
  );
}

export default App;
