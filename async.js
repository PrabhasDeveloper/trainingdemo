// // // console.log(10);
// // // console.log(20);
// // // // setTimeout(()=>{
// // // //    console.lOg(30); 
// // // // },5000)

// const { compose } = require("async");

// // // setInterval(()=>{
// // //    // document.writeln("MRU");
// // //    console.lOg(30);
// // // },1500)
// // // console.log(40);
// // // console.log(50);

// // // let p1 = new Promise((resolve , reject )=>{});
// // // console.log(p1);

// // let p2 = new Promise((resolve,reject)=>{
// //     resolve("sucess");
// // })
// // p2.then((response)=>console.log(response))
// // // console.log(p2);

// // ! Api fetching 

// function  fecthusers (){

//     let response = fetch("https://jsonplaceholder.typicode.com/users");

//     response.then(result => {
//         return result.json().then(data => {
//             console.log(data);
//             let store = document.getElementById("store");
//             console.log(store);
//             data.map(user=>{
//                 store.innerHTML += `
//            w     <tr>
//                 <td>${user.id}</td>
//                  <td>${user.name}</td>
//                   <td>${user.email}</td>
//                    <td>${user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=> console.log(err))
// }
// fecthusers();

// function demo()
// {
//     console.log("start");
//     console.log(10);
//     console.log(20);
//     console.log(30);
//     console.log(40);
//     console.log("End");

// }
// demo();


let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Success");
    }, 5000);
})

function demo(){
    console.log("start");
    let x = p;
    console.log(x);
    console.log("End");
};

demo()

async function fetchusers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);

}
fetchusers();


