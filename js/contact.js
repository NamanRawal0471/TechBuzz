function myFunction1() {
        
    var checkBox = document.getElementById("myCheck");

    if (checkBox.checked == true){
        alert("Your request for subscription has been successfully delivered. You will receive a confirmation mail in a couple of days. Thank You !!!");} 
    else {
        alert("You need to agree to all the terms and the condition before subscribing to the website.");
    }
}







    function myFunction2(){
        var name=document.getElementById("formName").value;
        var number=document.getElementById("formNumber").value;
        var email=document.getElementById("formEmail").value;
        var regex = /^[a-zA-Z ]{2,30}$/;
        var phoneno = /^\d{10}$/;
        var emailid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // var valid=/(?=.*[0-9])|(?=.*[~!@#$%^&*])/;

        if(name=="" || number=="" || email==""){
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
