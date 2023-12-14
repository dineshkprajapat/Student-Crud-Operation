import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "./baseurl";
import { Link } from "react-router-dom";
function Dispaly(){
    
    const[data,setData]= useState([])
    useEffect(()=>{
      getdata();
    },[])

    const getdata = ()=>{
      axios.get(`${BaseUrl}/student-display-api.php`)
      .then(Response =>{
        console.log(Response.data)
        setData(Response.data.student_list)
      })
    }

    const deletedata = (id)=>{
     const fromdata = new FormData();
     fromdata.append("st_id",id)

     axios.post(`${BaseUrl}/student-delete-api.php`,fromdata)
     .then(Response =>{
      console.log(Response.data)
      if(Response.data.flag === "1"){
        alert(Response.data.message)
        getdata()
      }else{
        alert(Response.data.message)
      }
     })
    }
    return(
        <>

        <div > 
        <h1 style={{color:"red"}}> Display </h1>
        <table border={1}  style={{textAlign:"center"}}>
        <thead>
        <tr>
                  <th> ID </th>
                  <th> Name </th>
                  <th> Mobile No </th>
                  <th> Email </th>
                  <th> Action </th>
                </tr>
        </thead>
        <tbody>


        </tbody>
         { data && data.length ? data.map((value,i)=>{
             return(
              <>
              
              
                <tr key={i+1} >
                  <td key={value.st_id}>{i+1}</td>
                  <td> {value.st_name}</td>
                  <td> {value.st_mobileno}</td>
                  <td> {value.st_email}</td>
                  <td> <button onClick={()=>{ deletedata(value.st_id)}}> 𐤕 </button>
                    <Link to={'/update/'+ value.st_id}>Update </Link></td>
                    <Link to={'/show/'+ value.st_id}>Show </Link>
                </tr>
              </>
             )
         }): "data not found"
           
         }
         </table>
        </div>
        </>
    )
}
export default Dispaly;