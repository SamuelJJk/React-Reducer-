import { useReducer, useState } from 'react'
import './App.css'
import Teams from './components/Teams'


const changeColor = (state,setColor) =>{
  switch(setColor.type){
    case "NUGGETS":
      return {
        body:"Blue",
        border:"red",
        text:"yellow"
      }
    case "RANGERS":
      return{
        body:"white",
        border:"red",
        text:"blue"
      }
    case "CHIEFS":
      return{
        body:"red",
        border:"orange",
        text:"white"
      }
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(changeColor,{
    body:"white",
    border:"black",
    text:"black"
  })
  return (
    <>
    <div className='sports'>
      <Teams name="Nuggets" dispatch={dispatch}/>
      <Teams name="Chiefs" dispatch={dispatch}/>
      <Teams name="Rangers" dispatch={dispatch}/>

    </div>
    <div className="colorBox">
      <div className="colorPalette" style={{ backgroundColor: state.body, borderColor: state.border, color: state.text }}>Team Colors</div>
    </div>
    </>
  )
}

export default App
