import './App.css'
import {Routes,Route} from 'react-router-dom'
import CardPage from './PAGES/cardPage'
import AddCard from './PAGES/AddCard'
import EditCard from './PAGES/EditCard'
import { useEffect, useState } from 'react'
import { getAllDoctor } from './API/helper'




function App() {

  const [contact,setContact] = useState();

  useEffect(()=>{
    getAllDoctor().
    then((data)=>{
      setContact(data)});
  },[])

 
  return (
    <>
    <Routes>
       <Route exact path ="/" element={<CardPage/>}/>
       <Route path = "/edit/:id" 
       element={<EditCard contact={contact} setContact={setContact}/>}/>
       <Route path = "/add" 
       element={<AddCard contact={contact} setContact={setContact}/>}/>
    </Routes>
    
    </>
  )
}

export default App
