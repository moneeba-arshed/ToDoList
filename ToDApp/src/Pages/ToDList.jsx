import React, { useEffect, useState } from 'react'

const ToDoList = () => {
    const [value , setValue] = useState("");
    const getLoacalStorage=()=>{
        const list = localStorage.getItem('list')
        if(list){
          return JSON.parse(localStorage.getItem('list')) 
      }
      else{
          return[];
      }
    }
    let a = getLoacalStorage();
    const [Items, setItems] = useState(a);

    const Inputhandler =(e)=>{
        setValue(e.target.value)
    }
    const AddItems = () => {
        if (value.trim() !== '') {
          setItems((oldItems) => {
            return [...oldItems, { id: oldItems.length, value }];
          });
          setValue('');
        }
      };
    const delteItems = (id) =>{
        setItems((oldItems)=>{
            return oldItems.filter(array => array.id !== id)
        })
    }
    useEffect(()=>{
localStorage.setItem('list',JSON.stringify(Items))
    },[Items])
    
  return (
    <div className="container">
        <div className="card d-flex align-items-center mx-auto" style={{width: "25rem",justifyContent:"center"}}>
      <h3 className='text-center'>ToDo List</h3>
      <div>   
      <input type="text" value={value } placeholder="Enter Anything" onChange={Inputhandler}/>
     <button className="btn ms-2" onClick={AddItems}>+</button>
     <ul>
        
        {Items.map((item)=>{
            return(
                <div className='d-flex list mt-2' key={item.id}> <button className="btn2 me-2" onClick={()=>delteItems(item.id)} >-</button>
            <li>{item.value} </li></div>
            ) 
        })}
    </ul>
    </div>
    </div>
    </div>
  )
}

export default ToDoList
