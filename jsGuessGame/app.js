// arr = [
//     ["melina", "joan", "hitler"],
//     ["meina", "jan", "hiler"],
//     ["belina", "goan", "gitler"]
// ]

// for(let i = 0; i<arr.length; i++){
//     console.log(`# ${i+1} array`)
//     for(let j =0; j <arr[i].length; j++){
//         console.log(arr[i][j])

//     }
// }

let maximum = parseInt(prompt("enter your maximum"));
while(!maximum){
    maximum = parseInt(prompt("enter your maximum"));
}

let input = prompt("Enter your first guess ");
let attempt = 1;
const target = Math.floor(Math.random()* maximum + 1);
console.log(target);

while (parseInt(input) !== target){
    if (input === 'q') break;
    attempt++;

    if( input > target){
        input = prompt("too high, guess again ");
    }else if ( input < target){
        input = prompt("too low, guess again ");
        }
   }

if (input === 'q'){
    console.log("you quit")
}else {
    console.log(" congratulations you won")
    console.log(` You won after `)
    alert("you won")
}

