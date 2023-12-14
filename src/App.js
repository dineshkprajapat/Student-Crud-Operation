import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Add from "./Add";
import Dispaly from "./display";
import Show from "./show";
import Update from "./update";
function App(){
  return(
    <>
    <Router>
      <Link to="/"> Add </Link> <br></br>
      <Link to="/display"> Display </Link>
      <Routes>
        <Route path="/" element={<Add/>} />
        <Route path="/display" element={<Dispaly/>} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="/show/:id" element={<Show/>} />
      </Routes>
    </Router>
    </>
  )
} 
export default App;