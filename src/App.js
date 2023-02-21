
import './App.css';
import Card from './page/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';



const App = () => {
  const[todo, setTodo]=useState([])
  const[newadd,setNewAdd]=useState('')

  useEffect(()=>{
    const data=localStorage.getItem("data")
    if(data){
      setTodo(JSON.parse(data))
    }
  },[])

  const addHp=()=>{
   
    let add={
      id: Math.random(),
        title: newadd,
        isCompleted: false,
        isDeleted: false
    }
    todo.push(add)
    setTodo([...todo])

    localStorage.setItem("data",JSON.stringify(todo))
   
  }  


  const completedHp=(id)=>{
    const todofind=todo.find((e)=>e.id===id);
      todofind.isCompleted=true
      setTodo([...todo])   
      localStorage.setItem("data",JSON.stringify(todo))
  }
  const deleteHp=(id)=>{
      const todofind=todo.find(e=>e.id===id);
      todofind.isDeleted=true
      setTodo([...todo])
      localStorage.setItem("data",JSON.stringify(todo))
  }




  return (  
    <div className="App">
        <div className='add-containar'>
          <TextField id="standard-basic" label="Task" variant="standard"  onChange={(data)=>setNewAdd(data.target.value)} />
          <Button variant="outlined" onClick={addHp} >Add Task</Button>
          <br/>
        </div>

        <div className='data-containar'>
          <h2>Data</h2>
          <div className='data-in'>
            {
              todo.map((e)=>{
                if(!e.isCompleted){
                  return(
                    <div>
                      {
                        !e.isDeleted && <Card id={e.id} title={e.title} completedHp={completedHp} isCompleted={e.isCompleted} deleteHp={deleteHp}/>
                      }
                    </div>
                  )
                }
                else
                {
                  return <></>
                }
              })
            }
          </div>
        </div>

        <div>
          <h2>completed</h2>
            <div className='data-com-in'>
            {
                todo.map((e) => {
                  if(e.isCompleted){

                   return (
                   <div>
                     {
                        !e.isDeleted && <Card key={e.id} id={e.id} title={e.title} deleteHp={deleteHp}/> 
                     }
                   </div>
                   )
                  } 
                  else {
                    return null
                  }  
                })
              
              }
              
            </div>
        </div>


    </div> 
    
    

    );

}
 
export default App;
