const array = [1,2,3,4,5];
// this is a simple for loop
// for (let i=0;i<5;i++){
//     console.log("the value is",array[i]);
// }

// this is nested for loop and it run 5 times 
// and nest j loop run 5 times so total 5*5 = 25 so it total run at 25 times. 

// for (let i=0;i<5;i++){
//     console.log("the value is",array[i]);
//     for (let j=0;j<5;j++){
//         console.log(j);
//     }
// }

// while loop simple work with top side array
let a = 0;
while(a<5){
    console.log(array[a]);
    a++;
}

// while loop as a conditional loop and use break statement.
let b = 0;
while (b < 5){
    console.log(array[b]);
    if (b == 3){
        break;
    }
    b++;
}
// it work as a infinite loop while but when
// 3 == 3 so it go back to while statement and again c value is 3 so
// statement true so thats how it work infinite loop
let c = 0;
while (c < 5){
    console.log(array[c]);
    if (c == 3){
        continue;
    }
    c++;
}