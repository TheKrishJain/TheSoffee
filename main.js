function show() {
    var x = document.getElementById("LoginPassword");
    if (x.type === "password") {
        x.type = "text";
    }
     else {
            x.type = "password";
          }
    
} 
function checkPass() {

    var og = document.getElementById("ogPassword")
    var re = document.getElementById("rePassword");
    var username = document.getElementById("username");
    var email = document.getElementById("SignupMail");

    
    if(og.value<1){
        document.getElementById("error1").style.visibility="visible";
    }
    if(og.value!=re.value){
  document.getElementById("error").style.visibility="visible";
  re.value="";
  og.value="";
    }
    else{
        re.setCustomValidity("");
    }

    if(og.value==re.value && username!="" && email!="" ){
        document.getElementById("success").style.visibility="visible";
    }
setTimeout(function(){
        window.location.reload();
     }, 3000);

   
}

function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.getElementById("result").innerHTML =    
              age + " years. ";  
    } 

function Search(){
document.getElementById("rasengan").style.visibility="hidden";
document.getElementById("searchspan").style.visibility="visible";

}
function redirect(){
    windows.location.href="Index.html";
}
