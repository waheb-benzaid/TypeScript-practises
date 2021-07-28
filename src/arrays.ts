const carmakers = ['ford','toyota','chevy']
// we can add the type annotation to this arrays by doing this :
const carmakers_ : string[] = ['ford','toyota','chevy'] // we add the annotation type when we create an empty array like this :

const carmakers__ : string [] = [] // that inform TS that this array will contains only strings
// if we do not like this , TS will not have enough information about the type of the array, ad the type will be 'any'
// we have to avoid the 'any' type much as possible, so we have to annotate the array


const carsByMake = [
    [1],
    [2],
    [3,4],
    ['hey']
]

//if we daclare an array without initalisation, we'll have to do like this :

const carsByMake_ : string[][]= []


//Arrays with different types
//We have to add type annotation to use multiple type in a signle array in TS

const days : (number | Date) [] = [new Date(),2] 

