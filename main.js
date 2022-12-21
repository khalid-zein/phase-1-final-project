function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}
$(document).ready(function(){
    $(".second-button").click(function(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const error1 = document.getElementById("error1")
        const error2 = document.getElementById("error2")
        const error3 = document.querySelector("option");

        if(email  === "" && password === ""){
            return error3.innerHTML = "*required";
        }else if(email === ""){
            return error1.innerHTML = "*Please fill your email";
        }else if(password === ""){
            return error2.innerHTML = "*Please fill your password";
        }else{
            $("#section").hide();
            $(".hidden").show();
        }
        error3.innerHTML = "";
        error1.innerHTML = "";
        error2.innerHTML = "";
    });
});