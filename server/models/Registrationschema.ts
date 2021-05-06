import mongoose, { Schema, Document } from "mongoose";

 export interface Donor extends Document {
    first_name: string;
    last_name: string;
    age:Number;
    email:string;
    phoneno: Number;
    address:string;
    distt:string;
    state:string;
    gender: string;
    coronapositive: Date;
    coronanegative: Date;
  }

 const registrationSchema=new mongoose.Schema({
first_name:{type:String,
    required:true
},
last_name:{type:String,
    required:true
},
age:{type:Number,
    required:true
},
email:{type:String,
    required:true
},
phoneno:{type:Number,
    required:true
},
address:{type:String,
    required:true
},
distt:{type:String,
    required:true
},
state:{type:String,
    required:true
},

coronapositive:{type:Date,
    required:true
},
coronanegative:{type:Date,
    required:true
},
gender:{type:String,
    required:true
}


})


// const Registration_model=mongoose.model("REGISTRATIONSCHEMA",registrationSchema);
// module.exports=Registration_model;
// export default mongoose.model<JD>("REGISTRATIONSCHEMA",registrationSchema)
const Registration_model = mongoose.model<Donor>("REGISTRATIONSCHEMA", registrationSchema);
module.exports= Registration_model;
