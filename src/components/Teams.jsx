import React from 'react'

function Teams({name,dispatch}) {
  return (
    <div className='box' onClick={()=>{dispatch({type: name.toUpperCase()})}}>
      {name}
    </div>
  )
}

export default Teams
