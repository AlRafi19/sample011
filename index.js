console.log('Assignment 01')

/*

Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.


Inside the function, create a for loop that iterates from 1 to 10.


Inside the loop, multiply the current iteration number by the input "num" to generate the product.


Log the product to the console in the format "num x iteration = product".


Test the function with different input numbers to generate multiplication tables.


*/

function multiplicationTable(num){
    let product;
    for (let i=1;i<=10;i++){
        if (!Number.isInteger(num)){
            break

        }else{
            product = num*i;
            console.log((`${num} x ${i} = ${ product}`))
        }
        }
       
    }
    


multiplicationTable(12)
multiplicationTable(5)
multiplicationTable(7)
multiplicationTable("ABCD")

