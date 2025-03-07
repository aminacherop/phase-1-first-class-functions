function receivesAFunction(callback){
    callback ();
}
function greetings(){
    console.log("hi");
}
receivesAFunction(greetings);

function returnsANamedFunction (){
    return function namedFunction(){
        console.log(`"before all" hook:`)
    };
}
const myfunction = returnsANamedFunction();
myfunction();


function returnsAnAnonymousFunction(){
    return function (){
        console.log(`"before all" hook:`);
    };

}
const hook = returnsAnAnonymousFunction();
hook();