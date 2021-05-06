import '../App.css';
import React, { useState,useEffect,dispatch ,createContext,useContext,useRef} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { NavLink,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Nabvar from "./Navbar"
function Registration() {
  const[error1,uerror1]=useState(false);
	const[error2,uerror2]=useState("");
  const[error3,uerror3]=useState(false);
	const[error4,uerror4]=useState("");
  const[cancelicon,ucancelicon]=useState(false);
  const[cancelicon1,ucancelicon1]=useState(false);
  const[icon,uicon]=useState(false);
  const[icon1,uicon1]=useState(false);
  const[search,usearch]=useState({
    searchvalue:""
  })
  const[aname,cname]=useState({
  first_name:"",
  last_name:"",
  age:"",
      email:"",
      address:"",
      phoneno:"",
      distt:"",
      state:"",
      country:"",
      coronapositive:"",
      coronanegative:"",
      select:"",
      gender:""


});
const input1=(event)=>{
  const {name,value}=event.target;
  usearch((previousvalue)=>{
    return{
      ...previousvalue,
      [name]:value
}})
}
const input=(event)=>{
 console.log(event.target.value);
  const {name,value}=event.target;
 if(value.length===0){
      uicon(false);
  ucancelicon(false);
  uicon1(false)
  ucancelicon1(false)
  }


  cname((previousvalue)=>{
     return{
          ...previousvalue,
          [name]:value
}})
}
const insubmitform2=(event)=>{
  event.preventDefault();
}
const onsubmit=(event)=>{
  event.preventDefault();
}
const getdata=async()=>{
  try{
    const searchval=search;

    console.log("datasent");
    const res=await fetch("/senddata",{method:"POST",
          headers:{
              "content-Type":"application/json"
          },
          body:JSON.stringify(searchval)})
          const data=await res.json();
          console.log(data);
       console.log(data,"18 without suggestion");
     if(!res.status===200){
        const error=new Error(res.error);
        throw error;
    }
}catch(err){
    console.log(err);
 }
}
const submitdata=async()=>{
if(validate()){
  console.log(aname.email)
  const {first_name,last_name,age,email,address,phoneno,distt,state,country,coronapositive,coronanegative,gender}=aname;

  console.log("datasent");
  const res=await fetch("/registerdoner",{method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({first_name,last_name,age,email,address,phoneno,distt,state,country,coronapositive,coronanegative,gender})})
        const data=await res.json();
        console.log(data);
        if(res.status===400){
            console.log("already sent");
            uerror1(true);
            uerror2("User already exist")
            setTimeout(function(){
              uerror1(false)
            },2000);
        }else{
          uerror3(true);
          uerror4("Register Successfully")
          setTimeout(function(){
            uerror3(false)
          },3000);
        }
  cname({first_name:"",
  last_name:"",
  email:"",
  age:"",
  address:"",
  phoneno:"",
  distt:"",
  state:"",
  country:"",
  gender:"",
  coronapositive:"",
  coronanegative:""})
  uicon(false)
  uicon1(false)
}
else{
  uerror1(true);
  uerror2("Please Fill All Fields Correctly")
  setTimeout(function(){
    uerror1(false)
  },2000);
}
}
const validate=()=>{
  let isValid = true;
  if (!aname.first_name) {
      isValid = false;
      console.log("enter first name")
  }
  if (!aname.gender) {
    isValid = false;
    console.log("select gender")
}
  if (!aname.email) {
    isValid = false;
    console.log("enter email")
  }
  if (!aname.age) {
    isValid = false;
    console.log("enter age")
  }
  if (aname.email !== "undefined") {
    var pattern = new  RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
    if (!pattern.test(aname.email)) {
      isValid = false;
      uicon(false);
      ucancelicon(true);
      console.log("not valid")
    }
    else{ucancelicon(false)
              uicon(true)}
  }
  if (aname.phoneno !== "undefined") {
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!pattern.test(aname.phoneno)) {
        isValid = false;
        uicon1(false);
        ucancelicon1(true)
        console.log("Please enter only number.");
    }else if(aname.phoneno.length !== 10){
        isValid = false;
        uicon1(false);
        ucancelicon1(true)
        console.log("Please enter valid phone number.");
    
      }else{ucancelicon1(false)
          uicon1(true)}
        }
    if(!aname.distt||!aname.state||!aname.country||!aname.address||aname.coronanegative||!aname.coronapositive){
      var letters = /^[A-Za-z]+$/;
      if(!aname.distt.match(letters)||!aname.state.match(letters)||!aname.country.match(letters))
      {
      uerror1(true);
      uerror2("Fill in letters")
      setTimeout(function(){
        uerror1(false)
      },2000);
      console.log("not match")
      isValid=false;
    }
      }
    return isValid;
}
  return (
   <>
   <div>
  <Nabvar/>
   <Link style={{textDecoration:"none"}} to="search"> <Button style={{margin:"10px",marginTop:"70px"}} variant="contained">Search Doner</Button></Link>
 
   
   <div className="page-content">
   <div className="form-v10-content" >
     <form className="form-detail"  onSubmit={onsubmit}>
       <div className="form-left">
       
         <h2 style={{textAlign:"center"}}>Register For Plasma Doner</h2>
         {error1?<div class="error-msg">
		<i className="fa fa-times-circle"></i>
		{error2}
	  </div>:null}
    {error3?<div className="error-msg1">
		<i className="fa fa-times-circle"></i>
		{error4}
	  </div>:null}
   
         <div className="form-group">
           <div className="form-row form-row-1">   
             <input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" required="" onChange={input} value={aname.first_name}/>
           </div>
           <div className="form-row form-row-2">
             <input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" required="" onChange={input} value={aname.last_name}/>
           </div>
         </div>
        
       <div className="form-row">
       <input type="number" name="age" id="first_name" className="input-text" placeholder="Age" required="" onChange={input} value={aname.age}/>
     </div>
         
         <div className="form-row">
           <input style={{paddingRight:"15%"}} type="text" name="email" className="company" id="company" placeholder="Email" required="" autoComplete="off" onChange={input} value={aname.email}/>{icon?<span className="spa" ><CheckCircleIcon/></span>:null}{cancelicon?<span className="spa1" ><CancelIcon/></span>:null}
         </div>
         <div className="form-row">
           <input type="text" name="address" className="company" id="company" placeholder="Address" required="" onChange={input} value={aname.address}/>
         </div>
                   <div className="form-row">
           <input type="text" name="phoneno" className="company" id="company" placeholder="Phone No" required="" onChange={input} value={aname.phoneno}/>{icon1?<span className="spa" ><CheckCircleIcon/></span>:null}{cancelicon1?<span className="spa1" ><CancelIcon/></span>:null}
         </div>
                   <div className="form-group">
                   <div className="form-row form-row-1">
                       <input type="text" name="distt" id="first_name" className="input-text" placeholder="Distt" required="" onChange={input} value={aname.distt}/>
                   </div>
                   <div className="form-row form-row-2">
                       <input type="text" name="state" id="last_name" className="input-text" placeholder="State" required="" onChange={input} value={aname.state}/>
                   </div>
               </div>
         <div className="form-row">
           <input type="text" name="country" className="company" id="company" placeholder="Country" required="" onChange={input} value={aname.country}/>
         </div>
         <div className="form-group">
         <div className="form-row form-row-1">
       
            <label style={{paddingTop:"50px"}}> Select Gender</label>
         </div>
         <div className="form-row form-row-2">
         <div className="radio-buttons">
        
         <input
           id="windows"
           value="Male"
           name="gender"
           type="radio"
           onChange={input}
         />
         Male
         <input
           id="mac"
           value="Femail"
           name="gender"
           type="radio"
           onChange={input}
         />
         Female
         
       </div>
         </div>
         
     </div>
    
                   <div className="form-group">
                   <div className="form-row form-row-1" style={{marginTop:"20px"}}>
                 
                      <label style={{paddingTop:"30px"}}> Choose Corona Positive Date</label>
                   </div>
                   <div className="form-row form-row-2">
                       <input type="date" name="coronapositive" id="last_name" className="input-text" placeholder="Coronanegativedate" required="" onChange={input} value={aname.coronapositive}/>
                   </div>
                   
               </div>
               <div className="form-group">
               <div className="form-row form-row-1" style={{marginTop:"20px"}}>
             
               <label style={{paddingTop:"30px"}}>Choose Corona Negative Date</label>
               </div>
              
               <div className="form-row form-row-2">
                   <input type="date" name="coronanegative" id="last_name" className="input-text" placeholder="Coronanegativedate" required="" onChange={input} value={aname.coronanegative}/>
               </div>
               
           </div>
               
               <div className="form-row-last">
               <input type="submit" id="dd" name="register" className="register" value="Register" onClick={submitdata} />
           </div>
               </div>
              
               </form>
               
   </div>
 </div>
 </div>
   </>
  );
}

export default Registration;
