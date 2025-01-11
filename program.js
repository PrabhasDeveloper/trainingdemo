// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         if(i>=j){
//         document.write("*")}
//         else{
//             document.writeln("&nbsp")
//         }
//     }
//     document.write("<br>")
// }

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j==6){
        document.write("*")}
        else{
            document.writeln("&nbsp")
        }
    }
    document.write("<br>")
}