// Function declaration

function evenodd(parameter1,parameter2){
    console.log(parameter1);
    console.log(parameter2);

}
// if not value send it show undefined
evenodd(); 
// if one value send that it show one value and other is undefined
evenodd(1);
// if put both values so it send both values
evenodd(1,2);


// function Expression or function as a reference

const hp = function(parameter1,parameter2){
    console.log("Function Expression",parameter1,parameter2)

}
hp();
hp(1);
hp(1,2);

// Arrow function same as Function expression use for call back
const arrow = (parameter1,parameter2)=>{
    console.log(parameter1)
    console.log(parameter2)
}
arrow();
arrow(1);
arrow(1,2);

