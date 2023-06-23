function validation() {
    var na = document.getElementById('name').value.trim();
    for (x in na) {
        ch = na.charCodeAt(x);
        if (ch < 65 || ch > 90 && ch < 97 || ch > 122) {
            // na.style.border="2px solid red";
            alert("Invalid firstname");
            // console.log(ch);
            return false;
        }
    }
    var phn = document.getElementById('phone').value.trim();
    var lenp = phn.length;
    //  console.log(lenp)
    if (lenp !== 10) {
        alert("Phone number should be exactly 10 digits");
        return false;
    }
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var mail = document.getElementById('mail').value.trim();
    if (reg.test(mail)) {
        console.log("Valid email");
    }
    else {
        alert("Invalid email");
        return false;
    }

    return true;
}