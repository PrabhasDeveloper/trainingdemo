// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="hello"



// let x = [...ele];
// x.map(element => {
//     element.style.backgroundColor="Orange"
// })



// let ele =  document.querySelector(" #mru");
// console.log(ele);

// let ele =  document.querySelectorAll(".test");
// console.log(ele);

// let ele = document.createElement("h1");
// ele.innerText  = "Dynamic creation of the html element";
// ele.id = "demo";

// console.log(ele);

// document.body.appendChild(ele);

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw= document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let uemail = mail.value;
    let upass = psw.value;
    let userDetails={
        uname ,uemail,upass
    }
     console.log(userDetails);
     localStorage.setItem("userData",JSON.stringify(userDetails))

})







