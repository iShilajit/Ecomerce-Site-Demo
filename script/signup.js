document.querySelector("#signup_form").addEventListener("submit",registration);
var signupArr=JSON.parse(localStorage.getItem("signup"))||[];
function registration(event){
    event.preventDefault();
    var e=document.querySelector("#email").value;
    var u=document.querySelector("#name").value;
    var p=document.querySelector("#pass").value;
    document.querySelector("#signup_form").reset();
    if(e===""){
        alert("Please Fill the Email field");
    }
    else if(u===""){
        alert("Please Fill the Username field");
    }
    else if(p===""){
        alert("Please Fill the Password field");
    }
    else{
        console.log(e,u,p);
        var signupObj={
            email:e,
            username:u,
            password:p,
        };
        console.log(signupObj);
        signupArr.push(signupObj);
        localStorage.setItem("signup",JSON.stringify(signupArr));
        alert("Sign Up Succesfully");
        window.location.href="login.html";
        // document.querySelector("input[type='submit']")
        // .addEventListener("click",function(){
           
        // });
    }
  

}