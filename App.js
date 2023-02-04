import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Lists} from './MyComponents/Lists';
import {Footer} from './MyComponents/Footer';
import { AddProduct } from './MyComponents/AddProduct';
import React, {useState} from 'react';

function App() {
  const onDelete = (list)=>{
    console.log("I'm ondelete of list", "list");
    //dEleting this way in react does not work
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setLists(lists.filter((e)=>{
      return e!==list;
    }))

  }

  const addProduct = (title, desc)=>{
    console.log("Adding this task...",title, desc)
    let sno;
    if(lists.length==0){
      sno = 0;
    }
    else{
      sno = lists[lists.length-1].sno + 1;
    }
    
    const myList = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setLists([...lists, myList]);
    console.log(myList);
  }
  const [lists, setLists] = useState([ //settodos is a function that will update
    {
      sno: 1,
      title: "Samsung Galaxy",
      desc: "Whatever"
    },
    {
      sno: 2,
      title: "iPhone 12",
      desc: "Expensive"
    },
    {
      sno: 3,
      title: "Subtle art of not giving a f*ck",
      desc: "Don't stop your knowledge"
    }
    
  ]);
  return (
    <>
    <Header title="My WishList" searchBar="true" />
    <AddProduct AddProduct={AddProduct}/>
    <Lists lists={lists} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
