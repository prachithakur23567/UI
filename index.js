const myBtn = document.getElementById("myBtn");
myBtn.addEventListener('click', myFunction);

function myFunction() {
    var u = document.getElementById("username");
    console.log(u.value);
    var e = document.getElementById("email");
    console.log(e.value);

    var p = document.getElementById("phone");
    console.log(p.value);

    var pa = document.getElementById("pass");
    console.log(pa.value);

}
// for clearout
myBtn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('#username,#email,#phone,#pass');
    inputs.forEach(input => {
        input.value = '';
    });

});
