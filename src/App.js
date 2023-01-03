import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import './App.scss';
import ControlPanel from './components/ControlPanel';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';




function App() {
  const [data, setData] = useState([])
  let countCompleted = 0
  const addNewData = (text) => {
    const newTodo ={
      id: uuidv4(),
      text: text,
      isComp: false
    }   
    setData([...data, newTodo])
  }

  
  data.forEach((el)=>el.isComp&&countCompleted++)

  const delData = (id) => { 
    setData(data.filter((el)=> id !== el.id))
  }

  const delCompl = () => {
    console.log("!!!");
    setData(data.filter((el)=>!el.isComp))    
  }

  const complete = (id) => {      
      const newArr = data.map((el) =>{
      return id === el.id ? {...el, isComp: !el.isComp} : {...el}
    }) 
    setData(newArr)
  }

  const deleteAll = () => {
    setData([]);
  }

 
  return (
    <div className="App">
      <h1>Todos App</h1>
        <TodoForm func={addNewData}/>
        {!!data.length &&  <ControlPanel deleteCompl={delCompl} deleteAll={deleteAll}/>}            
        <TodoList data={data} delFunc={delData} complFunc={complete}/> 
        {!!countCompleted && <h3>You have completed {countCompleted} {countCompleted>1 ? 'todos' : 'todo'}</h3>}
    </div>
  );
}

export default App;
