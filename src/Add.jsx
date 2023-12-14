import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "./baseurl";
import { useNavigate } from "react-router-dom";
function Add(){
     
  const navigate = useNavigate();
    const[updatevalue,setUpdatvalue] = useState({
      txt1:"",
      gender:"",
      num:"",
      email:"",
      pass:""
    })

  const Updatedata = (e)=>{
    setUpdatvalue((updatevalue)=>({
        ...updatevalue,
        [e.target.name]:e.target.value
    }))
  }
    const AddData = (e)=>{
         e.preventDefault();
       
         const frmdata = new FormData();
         frmdata.append("st_name",updatevalue.txt1)
         frmdata.append("st_gender",updatevalue.gender)
         frmdata.append("st_email",updatevalue.email)
         frmdata.append("st_mobileno",updatevalue.num)
         frmdata.append("st_password",updatevalue.pass)
          
         axios.post(`${BaseUrl}/student-add-api.php`,frmdata)
         .then( Response =>{
          console.log(Response.data)
          if( Response.data.flag === "1"){
            alert(Response.data.message)
            navigate("/display")
          }else{
            alert(Response.data.message)
          }
         })
       
    }
    return(
        <>
          <div style={{textAlign:"center"}}>

          <h1 style={{textAlign:"center",marginTop:"8%",color:"red"}}> Students Crud </h1>
       <form onSubmit={AddData} style={{margin:"8%"}}>
       <h2> 
       Name :<input style={{height:"25px",width:"250px"}} type="text" name="txt1" onChange={Updatedata}/> <br></br><br></br>
       Gender : <input  type="radio" name="gender" value="Male" onChange={Updatedata}/>Male
        <input type="radio" name="gender" value="Female" onChange={Updatedata}/>Female<br></br><br></br>
        Email: <input style={{height:"25px",width:"250px"}} type="email" name="email" onChange={Updatedata} /><br></br><br></br>
        Password : <input style={{height:"25px",width:"250px"}} type="password " name="pass" onChange={Updatedata}/><br></br><br></br>
        Mobile : <input style={{height:"25px",width:"250px"}} type="number" name="num" onChange={Updatedata}/><br></br><br></br>
        <input type="submit" />
       </h2>
       </form> 
          </div>
        </>
    )
}
export default Add;