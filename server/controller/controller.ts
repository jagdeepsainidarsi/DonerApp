import {Request,Response,NextFunction} from "express"
import mongoose from "mongoose"
const Register_model=require("../models/RegistrationSchema");

export const registerdoner= (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.body);
    const{ first_name,last_name,age,email,address,phoneno,distt,state,country,coronapositive,coronanegative,gender}=req.body;
    if(!first_name || !email||!address||!phoneno||!distt||!state||!country||!coronapositive||!coronanegative)
    {
        return res.status(403).json({error:"filled all "});
    }
    req.body.state= req.body.state.toUpperCase();
    req.body.phoneno=parseInt(req.body.phoneno);
    req.body.age=parseInt(req.body.age);
     req.body.country=req.body.country.toUpperCase();
    req.body.distt=req.body.distt.toUpperCase();
    req.body.country=req.body.country.toUpperCase();
    console.log(req.body,"16")
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

export const Getdoners=(req:Request,res:Response)=>{
    Register_model.find({},(err:any,data:any)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    })
}
