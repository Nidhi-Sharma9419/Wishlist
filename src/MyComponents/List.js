import React from 'react'

export const List = ({list, onDelete}) => {
  return (
    <div>
        <h4>{list.title}</h4>
        <p>{list.desc}</p>
        <button className='btn btn-sm btn.danger' onClick={()=>onDelete(list)}>delete</button>
    </div>
  )
}
