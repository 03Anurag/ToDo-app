import React,{useState,useEffect} from "react";
import ToDo from './items';
import './App.css';
import InputArea from "./input";

function App() {
  const [items , setItems] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")

    if(localValue === null) return []

    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS" , JSON.stringify(items))
  },[items])

  function addItems(inpValue){
    if(inpValue.trim()==="") return
    setItems(prevValue=>{
      return [...prevValue , inpValue]
    })
  }
  
  function deleteItem(id){
    setItems(prevValue=>{
      return prevValue.filter((item , index)=>{
        return index!==id
      })
})
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems}/>
      <div>
        <ul>
          {items.map((item , index)=> <ToDo key={index} text={item} id={index} onChecked={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

