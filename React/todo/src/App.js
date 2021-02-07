import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from "./components/TodoForm";
import Results from "./components/Results";
import { useState } from 'react';


function App() {
  const [TodoList, setTodoList] = useState([]);
  const addTodo = newEntry => {
    setTodoList([...TodoList, newEntry])
    console.log("TodoList" + TodoList);
  }
  

    // const deleteToDo = (index) => {
    //   setTodoList([
    //     ...TodoList.slice(0, index),
    //     ...TodoList.slice(index + 1)
    //   ]);
    // }
  




  const checked = index => {
    let completion = TodoList[index];
    completion.isCompleted = !completion.isCompleted;
    setTodoList([...TodoList.slice(0, index), completion, ...TodoList.slice(index + 1)])
  }

  return (
    <div className="App">
      <TodoForm newTodo={addTodo} />

      <div className="col-sm-6">
        {
          TodoList.map((Todoitem, index) => {
            return <Results item={Todoitem} completed={checked} index={index} />
          })

        }
        {/* <button onClick={deleteToDo} value={}>Delete</button> */}
      </div>
    </div >
    
  );
}

export default App;
