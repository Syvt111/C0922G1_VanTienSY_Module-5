

function findFibonacci(number: number): number {
    if (number <= 1) {
        return number;
    }
    return findFibonacci(number - 1) + findFibonacci(number - 2);

}

let number : number = 10 ;
let sum :number = 0 ;
console.log(`Dãy ${number} số fibonacci  là :  `);
for (let i = 0 ; i < number ; i ++ ){
    sum += findFibonacci(i)
    console.log(findFibonacci(i));

}
console.log(`Dãy số fibonacci có tổng là : ${sum} `);