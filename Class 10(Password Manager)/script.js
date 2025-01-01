let box = document.getElementById("box")



let inputBox = document.getElementById("inputBox");
let submitBtn = document.getElementById("submitBtn");

submitBtn.innerText = "Generate Password 🤫"

function clickHua() {

    const characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_|{}:<>,.''/?+";
    let length = 9
    let password = "";

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * characters.length)
        console.log(random);
        password += characters[random]
    }

    // alert("Your password is generated")
    Toastify({
        text: "Your Password is generated",
        duration: 3000, // Duration in milliseconds
        close: false, // Show close button
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,rgb(41, 43, 189) ,rgb(21, 220, 227) )", // Orange gradient
        },
        onClick: function() {} // Callback after click
    }).showToast();

    inputBox.value = password;
}
submitBtn.addEventListener('click', clickHua)