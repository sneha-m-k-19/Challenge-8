function validation() {
    checkUseridValidate();
    checkPassValidate();
    checkAddressValidate();
    checkNameValidate();
    checkValidate();
    checkZipcodeValidate();
    checkEmailValidate();
    if (userid_error.innerHTML == "" && pwd_error.innerHTML == "" && name_error.innerHTML == "" && address_error.innerHTML == "" && zipcode_error.innerHTML == "" && email_error.innerHTML=="") {
        alert("Registered Successfully");
    }
}

function checkUseridValidate() {
    userid = document.getElementById("txtid").value;
    divuserid = document.getElementById("userid_error");
    divuserid.style.color = "red";
    if (userid == "") {
        divuserid.innerHTML = "User Id is required.Please complete this field to continue";
        document.getElementById("txtid").focus();
        return false;
    }
    else {
        divuserid.innerHTML = "";
    }
    var minNumberofChars = 5;
    var maxNumberofChars = 7;
    if (userid.length < minNumberofChars || userid.length > maxNumberofChars) {
        divuserid.innerHTML = "User Id must have 5 to 7 Characters";
        document.getElementById("txtid").focus();
        return false;
    }
    else {
        divuserid.innerHTML = "";
    }
}

function checkPassValidate() {
    pwd = document.getElementById("txtpass").value;
    divpwd = document.getElementById("pwd_error");
    divpwd.style.color = "red";
    if (pwd == "") {
        divpwd.innerHTML = "Password is required.Please complete this field to continue";
        document.getElementById("txtpass").focus();
        return false;
    }
    else {
        divpwd.innerHTML = "";
    }
    var minNumberofChars = 7;
    var maxNumberofChars = 12;
    if (pwd.length < minNumberofChars || pwd.length > maxNumberofChars) {
        divpwd.innerHTML = "Password must have 7 to 12 Characters";
        document.getElementById("txtpass").focus();
        return false;
    }
    else {
        divpwd.innerHTML = "";
    }
}

function checkNameValidate() {
    name = document.getElementById("txtname").value;
    divname = document.getElementById("name_error");
    divname.style.color = "red";
    if (name == "") {
        divname.innerHTML = "Name is required.Please complete this field to continue";
        document.getElementById("txtname").focus();
        return false;
    }
    else {
        divname.innerHTML = "";
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        divname.innerHTML = "Only Alphabets";
        document.getElementById("txtname").focus();
        return false;
    }
    else {
        divname.innerHTML = "";
    }
}

function checkAddressValidate() {
    address = document.getElementById("txtaddress").value;
    divaddress = document.getElementById("address_error");
    divaddress.style.color = "red";
    if (address == "") {
        divaddress.innerHTML = "Address is required.Please complete this field to continue";
        document.getElementById("txtaddress").focus();
        return false;
    }
    else {
        divaddress.innerHTML = "";
    }
    if (!address.match(/^[0-9a-zA-Z]+$/)) {
        divaddress.innerHTML = "Alphanumeric characters only.";
        document.getElementById("txtaddress").focus();
        return false;
    }
    else {
        divaddress.innerHTML = "";
    }
}

function checkZipcodeValidate() {
    zipcode = document.getElementById("txtzipcode").value;
    divzipcode = document.getElementById("zipcode_error");
    divzipcode.style.color = "red";
    if (zipcode == "") {
        divzipcode.innerHTML = "Zipcode is required.Please complete this field to continue";
        document.getElementById("txtzipcode").focus();
        return false;
    }
    else {
        divzipcode.innerHTML = "";
    }
    var x = /^[0-9a-zA-Z]+$/;
    if (!zipcode.match(x)) {
        divemail.innerHTML = "Alphanumeric characters only.";
        document.getElementById("txtzipcode").focus();
        return false;
    }
    else {
        divzipcode.innerHTML = "";
    }
}

function checkEmailValidate() {
    email = document.getElementById("txtemail").value;
    divemail = document.getElementById("email_error");
    divemail.style.color = "red";
    if (email == "") {
        divemail.innerHTML = "Emailid is required.Please complete this field to continue";
        document.getElementById("txtemail").focus();
        return false;
    }
    else {
        divemail.innerHTML = "";
    }

    var x = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(x)) {
        divemail.innerHTML = "Invalid Email Address";
        document.getElementById("txtemail").focus();
        return false;
    }
    else {
        divemail.innerHTML = "";
    }
}

function checkValidate() {
    divcountry = document.getElementById("ddlcountry_error");
    divcountry.style.color = "red";
    if (document.getElementById("ddlcountry").value == "Please select a country") {
        divcountry.innerHTML = "County is required.";
    }
    else {
        divcountry.innerHTML = "";
    }

    divgender = document.getElementById("gend_error");
    divgender.style.color = "red";
    if (document.getElementById('txtmale').checked == true) {
        divgender.innerHTML = "";
    }
    else if (document.getElementById('txtfemale').checked == true) {
        divgender.innerHTML = "";
    }

    else {
        divgender.innerHTML = "Gender is required.";
    }
}