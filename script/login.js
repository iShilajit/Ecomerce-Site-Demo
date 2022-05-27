var regusers = JSON.parse(localStorage.getItem("signup"))||[];
console.log(regusers);
document.querySelector("#login_form").addEventListener("submit",_login);
function _login(event){
    event.preventDefault();
    var le=document.querySelector("#email").value;
    var lp=document.querySelector("#pass").value;
    console.log(le,lp);
    if(le===""){
        alert("Please fill valid Email Id");
    }
    else if(lp===""){
        alert("Please fill valid password");
    }
   
    else{
        _subLog(regusers,le,lp);
    }
}

function _subLog(regusers,e,p){
    var f=0;
    for(var i=0;i<regusers.length;i++){
        if(regusers[i].email==e && regusers[i].password==p){
            f=1;
        }
       
    }
    if(f){
        alert("Login Successfully");

        window.location.href = "index.html ";
        document.querySelector("#login_form").reset();
    }
    else{
        alert("Failed to login ");
    }
}