const form = document.forms["sign-up-form"];
const message = document.getElementById("message");
message.style.color="red";
message.style.fontSize ="14px";
let validate;
function validateForm(){
    message.innerHTML="";
    if(form["password"].value=="" || form["confirm-password"].value==""){
        message.innerHTML="*Password fields cannot be empty";
        return false;
    }
    if(form["password"].value != form["confirm-password"].value){
        message.innerHTML= "*Passwords do not match";
        return false;
    }
    else{
        changeClasses();
        return true
    }
}
function changeClasses(){
    const signUpPage = document.getElementById("signup-page");
    const successPage = document.getElementById("success-page");
    signUpPage.classList.add("hidden");
    signUpPage.classList.remove("signup-page");
    successPage.classList.remove("hidden");
    successPage.classList.add("success-page");

}
