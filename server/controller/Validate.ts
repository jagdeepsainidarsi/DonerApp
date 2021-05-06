

 export const validate=(first_name:string,last_name:string,age:number,email:string,address:string,phoneno:string,distt:string,state:string,coronapositive:Date,coronanegative:Date,gender:string)=>{
    let isValid = true;
   // phoneno.toString();
    if (!first_name) {
        isValid = false;
        console.log("enter first name")
    }
    if (!gender) {
      isValid = false;
      console.log("select gender")
  }
    if (!email) {
      isValid = false;
      console.log("enter email")
    }
    if (!age) {
      isValid = false;
      console.log("enter age")
    }
    if (email !== "undefined") {
      var pattern = new  RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
      if (!pattern.test(email)) {
        isValid = false;
      
        console.log("not valid")
      }
      
    }
    if (phoneno !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(phoneno)) {
          isValid = false;
         
          console.log("Please enter only number.");
      }else if(phoneno.length !== 10){
          isValid = false;
         
          console.log("Please enter valid phone number.");
      
        }
          }
          if(!state||!distt){
            console.log("chosse dist and state")
            isValid=false;
          }
      return isValid;
  }
  
