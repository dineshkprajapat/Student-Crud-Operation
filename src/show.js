import React, { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "./baseurl"
import { Link, useParams } from "react-router-dom"
function Show(){

    const[data,setData]= useState("")
    let{id} = useParams();
    useEffect(()=>{
     getdata();
    },[])

    const getdata= ()=>{
        axios.get(`${BaseUrl}/student-profile-api.php?st_id=${id}`)
   .then(
    Response =>{
        console.log(Response.data)
        setData(Response.data)
    }
   )
    }
    return(
        <>

        <h1 style={{color:"red"}}> Show </h1> <br></br>
        <table border={2}>
           
                <tr>
                    <th> id </th>
                    <td>{data.st_id} </td>
                </tr>
                <tr>
                    <th> Name </th>
                    <td>{data.st_name} </td>
                </tr>

                <tr>
                    <th> Email </th>
                    <td> {data.st_email} </td>
                </tr>

                <tr>
                    <th> Number </th>
                    <td> {data.st_mobileno}</td>
                </tr>
                
                
        
        </table>
        <br></br>
        <Link to="/display" > Go Back </Link>
        </>
    )
}
export default Show;