import React from 'react'
import {List} from './List'  //we can write also '../MyComponents/List'

export const Lists = (props) => {
  let myStyle = {
    minHeight: "70vh"
    
    
  }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='text-center my-3'>List</h3>
        {props.lists.length ===0 ?"No task to do!": 
        props.lists.map((list)=>{
          return (
            <>
          <List list={list} key={list.sno} onDelete={props.onDelete}/><hr/>
          </>)
        })}    
        {/* /* <List list={props.lists[0]}/> */ }
    </div>
  )
}
  