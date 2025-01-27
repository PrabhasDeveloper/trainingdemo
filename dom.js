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

// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw= document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.value;
//     let uemail = mail.value;
//     let upass = psw.value;
//     let userDetails={
//         uname ,uemail,upass
//     }
//      console.log(userDetails);
//      localStorage.setItem("userData",JSON.stringify(userDetails))

// })

// let h1 = document.createElement("Hi");
// h1.innerText()

let mainEle= document.createElement("div");
mainEle.setAttribute("id","mainBlock");
mainEle.style.border= "2px solid red";
mainEle.style.width = "550px";
mainEle.style.height= "550px";

console.log(mainEle);


let topEle = document.createElement("div");
topEle.setAttribute("class","topBlock");


let image = document.createElement("img");
image.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonepiece.fandom.com%2Fwiki%2FMonkey_D._Luffy&psig=AOvVaw2I5HHgmsTNT0PswpQ69BX7&ust=1738048223306000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLic1KmslYsDFQAAAAAdAAAAABAE";
image.style.width = "550px";

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");


let h1 = document.createElement("h1");
h1.innerText= "CAT";
h1.style.textAlign= "center"

let btn = document.createElement("button");
btn.innerText="View More";
btn.style.broder = "none";
btn.style.padding= "20px";
btn.style.backgroundColor="dodgerblue";
btn.style.color="white";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);

topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);







