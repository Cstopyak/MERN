
import './App.css';
import TabHeader from './Components/TabHeader';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState([
    {
      index: 0,
      title: "tab One",
      content: "content for tab one",
      selected: true
    },
    {
      index: 1,
      title: "tab two",
      content: "content for tab two",
      selected: false
    },
    {
      index: 2,
      title: "tab three",
      content: "content for tab three",
      selected: false
    }
  ])
  const clickedHander = item =>{
    const myTabs =[...tab]
    myTabs.forEach((t) => t.selected =false);
    setTab(myTabs);
    const editTab = tab[item];
    editTab.selected = true;
    setTab([...tab.slice(0,item), editTab, ...tab.slice(item+1)]);
  }

  return (
    <div className="App">
      {
        tab.map((item, i) => {
        return <TabHeader tabItem={item} key={i} isClicked = {clickedHander} />
        
        })
      }  
    {
      tab.map((t, i) =>{
        return t.selected ? <h3> {t.content}</h3> : ""
      })
    }

    </div>
  );
} //end function


export default App;
