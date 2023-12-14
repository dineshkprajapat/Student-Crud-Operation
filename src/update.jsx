import axios from "axios";
import React, { useEffect } from "react";
import { BaseUrl } from "./baseurl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Update(){
    
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
      const navigate = useNavigate();
    let {id}= useParams();
    useEffect(()=>{
       getdata()
    },[])

    const getdata = ()=>{
        axios.get(`${BaseUrl}/student-profile-api.php?st_id=${id}`)
        .then(
            Response =>{
                console.log(Response.data)
                setUpdatvalue({
                    txt1:Response.data.st_name,
                    gender:Response.data.st_gender,
                    num:Response.data.st_mobileno,
                    email:Response.data.st_email,
                })
            }
        )
    }



    const UpdateData = (e)=>{
        e.preventDefault();
        const frmdata = new FormData()
        frmdata.append("st_id",id)
        frmdata.append("st_name",updatevalue.txt1)
        frmdata.append("st_gender",updatevalue.gender)
        frmdata.append("st_email",updatevalue.email)
        frmdata.append("st_mobileno",updatevalue.num)

     axios.post(`${BaseUrl}/student-update-api.php`,frmdata)
    .then(
        Response =>{
            console.log(Response.data)
            if( Response.data.flag === "1"){
                alert(Response.data.message)
                navigate("/display")
              }else{
                alert(Response.data.message)
              }
         
            
        }
    )
       
    }
    const[checked,setChecked] = useState(updatevalue.gender)
    return(
        <>
           <form onSubmit={UpdateData} style={{margin:"8%"}}>
       <h2> 
       Name :<input style={{height:"25px",width:"250px"}} type="text" name="txt1" onChange={Updatedata} value={updatevalue.txt1}/> <br></br><br></br>
       Gender : <input  type="radio" name="gender" value={updatevalue.gender} checked={updatevalue.gender==="Male"? true : false} onChange={Updatedata}  />Male
        <input type="radio" name="gender" value={updatevalue.gender}  onChange={Updatedata}   checked={updatevalue.gender==="Female"? true : false} />Female<br></br><br></br>
        Email: <input style={{height:"25px",width:"250px"}} type="email" name="email" onChange={Updatedata} value={updatevalue.email} /><br></br><br></br>
        Mobile : <input style={{height:"25px",width:"250px"}} type="number" name="num" onChange={Updatedata} value={updatevalue.num} /><br></br><br></br>
        <input type="submit" />
       </h2>
       </form>
        </>
    )
}
export default Update;