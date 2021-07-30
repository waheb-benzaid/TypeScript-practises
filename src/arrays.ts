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

//----------------------------------------------------------------------------------------------
type Drink = [string,boolean,number]

const cocaCola : Drink = ["Black",true,40] 

// the Drink is a Type alias
// Just use it for defining the types f the tuple , we can do instead : 

const pepsi1 :[string,boolean,number] = ["Black",true,40] 
// we can use the alias Drink to avoid the repetition 
const pepsi2 : Drink = ["Black",true,40] 







