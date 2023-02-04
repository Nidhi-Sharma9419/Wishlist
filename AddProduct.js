import React, { useState } from 'react'


export const AddProduct = ({addProduct}) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        addProduct(title, desc);
    }
    return (
        <div className='container my-3'>
            <h3>
                Save to Wishlist
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Product Name</label>
                    <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                       
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Description</label>
                    <input type="text" value = {desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-primary btn-sm">Add To Wishlist</button>
            </form>
        </div>
    )
}
