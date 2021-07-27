let apples : number = 5
let speed : number = 10
let hasName: boolean = true

let stringVariable : string = 'its a string '
let nothingMuch : null = null
let noting : null = null

let point :{x:number,y:number}={
    x:10,
    y:20
}

// Functions 

const  logNumber: (i : number) => void = (i : number) =>{
    console.log(i);
}

// When to use annotations:
// 1) When we have a fucntion that returns the 'any' type

const json = '{"x":"20","y":"10"}'
const coordinates : {x:number,y:number} = JSON.parse(json)
console.log(coordinates); // the result : {x: 20, y: 10} 

// 2) When we declare a variable on one line and initialize it later

let words = ['red','green','blue']
let foundWord

for (let index = 0; index < words.length; index++) {
    if (words[index]==='green') {
        foundWord = true
    }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10,-1,12]
let numberAboveZero : boolean | number = false

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        numberAboveZero = numbers[index] 
    }
}

