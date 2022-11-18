function myFunction1() {
        
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true){
        alert("Your request for article has been successfully submitted. You will further receive future updates related to your article through e-mail. Stay Tuned !!!");} 
    else {
        alert("You need to agree to all the terms and the condition before subscribing to the website.");
    }
}

function myFunction2(){
    var name=document.getElementById("formName").value;
    var number=document.getElementById("formNumber").value;
    var email=document.getElementById("formEmail").value;
    var article=document.getElementById("formArticle").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    var phoneno = /^\d{10}$/;
    var emailid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // var valid=/(?=.*[0-9])|(?=.*[~!@#$%^&*])/;

    if(name=="" || number=="" || email=="" || article==""){
        alert("You cannot leave any field empty. Please fill all the details asked.");
        document.getElementById("myCheck").checked = false;
    }
    else {
        if(regex.test(name)){
            if(phoneno.test(number)){
                if(emailid.test(email)){

        }
                else{
            alert("Please enter a valid email address.");
            document.getElementById("myCheck").checked = false;
        }

        }
            else{
            alert("Please enter a valid phone no. .");
            document.getElementById("myCheck").checked = false;
        }
        }
        else{
            alert("Please enter a valid name.");
            document.getElementById("myCheck").checked = false;
        }
    }

}
