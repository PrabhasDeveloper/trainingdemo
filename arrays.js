
// // let users = [ "Ramya", "Saismitha","Sai Nikhil","Rahul","Prabhas","NTR"];


// // let x = users.forEach((user)=>{
// //     return user;

// // });
// // console.log(x);


// //  let  userDetails = {
// //     name : "prabhas",
// //     age:20,
// //     company : "Amazon",
// //     sal: 1234567890,
// //     details : function(){
// //         return ` My name is ${name} and i am working in ${this.company}`
        
        
// //     }
// //     console.log(userDetails);

    

// // }


// let userDetails = [
//     {
//         name:"prabhas",
//         city:"hyderbad"
//     },

//     {
//         name:"luffy",
//         city:"wano"
//     },
//     {
//         name:"isagi",
//         city:"tokyo"
//     },
//     {
//         name:"manoj",
//         city:"Kmr"
//     },
//     {
//         name:"sathwik",
//         city:"Ramayanpet"
//     }
// ];

// userDetails.map((x)=>{
// console.log(x);
// })

let userDetails ={
    name:"sam",
    age:25,
    city:"HHyd"

};

console.log(userDetails);

let x = JSON.stringify(userDetails);
console.log("JSON object "+x);

let y = JSON .parse(x);
console.log(y);





