var email;
var password;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
var passwordformat= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{8,}$/;
var phoneformat = /^\d{10}$/;

function SignUp(){
    var dob;
    var gender;
    var phone;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    dob = document.getElementById('dob').value;
    if (document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked){
        gender = document.getElementById('male').value;
    }
    phone = document.getElementById('phone').value;

    if(!email){
        document.getElementById('emailError').style.display ="block"
    }
    else{
        document.getElementById('emailError').style.display ="none"
    }
    if(!password){
        document.getElementById('passwordError').style.display ="block"
    }
    else{
         document.getElementById('passwordError').style.display ="none"
    }
    if(!dob){
        document.getElementById('dobError').style.display ="block"
    }
    else{
        document.getElementById('dobError').style.display ="none"
    }
    if(!gender){
        document.getElementById('genderError').style.display ="block"
    }
    else{
         document.getElementById('genderError').style.display ="none"
    }
    if(!phone){
        document.getElementById('phoneError').style.display ="block"
    }
    else{
         document.getElementById('phoneError').style.display ="none"
    }
    if(email != "" && !mailformat.test(email)){
        document.getElementById('emailFormatError').style.display ="block"
    }
    else{
        document.getElementById('emailFormatError').style.display ="none"
    }
    if(password != "" && !passwordformat.test(password)){
        document.getElementById('passwordFormatError').style.display ="block"
   }
   else{
        document.getElementById('passwordFormatError').style.display ="none"
   }
    if(phone != "" && !phoneformat.test(phone)){
         document.getElementById('phoneFormatError').style.display ="block"
    }
    else{
         document.getElementById('phoneFormatError').style.display ="none"
    }
    if(!email || !password || !dob || !gender || !phone ||email != "" && !mailformat.test(email) ||phone != "" && !phoneformat.test(phone) || password != "" && !passwordformat.test(password)){
        return false
    }
    return true;


}

function SignIn(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if(!email){
        document.getElementById('emailError').style.display ="block"
    }
    else{
        document.getElementById('emailError').style.display ="none"
    }
    if(!password){
        document.getElementById('passwordError').style.display ="block"
    }
    else{
         document.getElementById('passwordError').style.display ="none"
    }
    if(email != "" && !mailformat.test(email)){
        document.getElementById('emailFormatError').style.display ="block"
    }
    else{
        document.getElementById('emailFormatError').style.display ="none"
    }
    if(password != "" && !passwordformat.test(password)){
        document.getElementById('passwordFormatError').style.display ="block"
   }
   else{
        document.getElementById('passwordFormatError').style.display ="none"
   }
    if(!email || !password || email != "" && !mailformat.test(email) || password != "" && !passwordformat.test(password)){
        return false
    }
    return true;


}
