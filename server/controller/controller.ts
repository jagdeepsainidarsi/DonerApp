import {Request,Response,NextFunction} from "express"
import mongoose from "mongoose"
const Register_model=require("../models/RegistrationSchema");
import {validate} from "./Validate";

export const registerdoner= (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    const{ first_name,last_name,age,email,address,phoneno,distt,state,coronapositive,coronanegative,gender}=req.body;
    if(!first_name || !email||!age||!address||!phoneno||!distt||!state||!coronapositive||!coronanegative)
    {
        return res.status(403).json({error:"filled all "});
    }
    req.body.state= req.body.state.toUpperCase();
    req.body.age=parseInt(req.body.age);
     req.body.distt=req.body.distt.toUpperCase();
    if(validate(first_name,last_name,age,email,address,phoneno,distt,state,coronapositive,coronanegative,gender)){
        console.log("validate")
        Register_model.findOne({email:email},(err:any,data:any)=>{
                 if(data){
                 console.log("alreadexist")
                 res.status(400).json("Already Exist With This Email");
                 }
                 else{
                let book=new Register_model(req.body);
                book.save((err:any)=>{
                if(err){
                    console.log("Er");
                }
                else{
                res.status(200).json("RegisterSuccessfully");
                console.log("Registersuccess")}
        })
                 }
             })
    }
    else{
        console.log("err");
        res.send("Validation faied");
    }
    
    console.log(req.body,"16")
   
}

export const Getdoners=async (req:Request,res:Response)=>{
    const user=await Register_model.find({});
      if(user){
          res.send(user);
      }
      else{
          res.send("nouser");
      }
    
}

