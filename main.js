


function validation(){
    var user = document.getElementById("user").value;
    var user = document.getElementById("email").value;
    var user = document.getElementById("mob").value;
    var pas = document.getElementById("pas").value;
    var cpas = document.getElementById("cpas").value;

    
    
    
    
    if(user == ""){
      document.getElementById("username").innerHTML = "* Enter your username";
      return false;
    }

    if(email == ""){
      document.getElementById("emailid").innerHTML = "* Enter your Email";
      return false;
    }


    if(mob==""){
      document.getElementById("mobile").innerHTML = "* Enter your Mobile Number";
      return false;
    }


    if(pas==""){
      document.getElementById("password").innerHTML = "* Enter your Password";
      return false;
    }

    if(cpas==""){
      document.getElementById("cpassword").innerHTML = "* Confirm your Password";
      return false;
    }



}

 
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector("#login");
  const signupForm = document.querySelector("#signup");


  document.querySelector("#linksignup").addEventListener("click", e => {
    e.pereventDefault();
      signupForm.classList.remove("form_hidden");
    loginForm.classList.add("form_hidden");

  });

   document.querySelector("#linklogin").addEventListener("click", e => {
       e.pereventDefault();
     loginForm.classList.remove("form_hidden");
     signupForm.classList.add("form_hidden");
   });
});