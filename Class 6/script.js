alert("Hello");

// let restaurent = prompt("Enter Restaurent Name");

// let food = prompt("Enter Food : Fries || or karahi")

// if (restaurent == "BurgerDon" || restaurent == "Hermain Sherfan"){
//     if(food == "Fries"){
//         console.log("lala 2 50 wali")
//         let coldrink = prompt("Is coldrink is cold or not");
//         if(coldrink == "cold"){
//         console.log("2 coldrink");
//     }
//     else{
//         console.log("2 lassi hi theek hai");
    
//     }
//     }
//     else{
//         console.log("5 Kg Butter Chesse Karahi");
//         let other = prompt("saada Naan or till wala Naan")
//         if(other == "saada Naan"){
//             console.log("10 le ao garma gram");
//         }
//         else{
//             console.log("5 hi le aoo");
//         }
//     }
// } 
// else{
//     console.log("Ghar waloo na plan hi cancel kardiya😭")
// } 

let rightemail = "m.ayyan";

let Email = prompt("Enter your email")

if (Email.length = 0){
    console.log("Enter your email");
}else if (Email == rightemail){
    console.log("Your Email is correct now enter password");

    let mypassword = "pata nahi";

    let password = prompt("Enter your password")

    if (password.length = 0){
        console.log("Enter your password");
    }

    else if (password == mypassword){
        console.log("Welcome you are login🤩");
    }

    else{
        console.log("Wrong Password")
    }
}else{
    console.log("Email is incorrect");
}