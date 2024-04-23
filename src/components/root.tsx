import React, { useState } from 'react'
import "./styles/root.css"
import Navbar from './navbar'
import Aboutpage from './aboutpage'
import Contactpage from './contactpage'
import Homepage from './homepage'

function Root() {
  const [selectroute,setSelectroute]=useState("Home")
const tabcomponents=()=>{
  switch(selectroute){
    case "Home": return (
      <Homepage/>
    )
    case "About":return (
      <Aboutpage/>
    )
    case "Contact":return (
      <Contactpage/>
    )
  }
}

  return (
    <div className='rootcontainer'>
      <Navbar selectroute={selectroute} setSelectroute={setSelectroute}/>
      
        {
          tabcomponents()
}
      </div>
  )
}

export default Root