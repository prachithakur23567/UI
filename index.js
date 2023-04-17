const myBtn = document.getElementById("myBtn");
myBtn.addEventListener('click', myFunction);

function myFunction() {
    var u = document.getElementById("username");
    console.log(u.value);
    var e = document.getElementById("email");
    console.log(e.value);
    // e.value.reset();
    // e.reset();
    var p = document.getElementById("phone");
    console.log(p.value);

    var pa = document.getElementById("pass");
    console.log(pa.value);

}

// for validateform
// function seterror(id, error) {
//     element = document.getElementById(id);
//     element = document.getElementsByClassName('forerror')[0].innerHTML = error;

// }
// function validateform() {
//     var returnval = true;
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length < 5) {
//         seterror("name", "*");
//         returnval = false;
//     }
//     return returnval;
// }
