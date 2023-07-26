const today =  new Date()
console.log(today)

console.log(today.getDay())
console.log(today.toString())
console.log(today.getFullYear())
console.log(today.getMilliseconds())


//============SWITCH CASE==============
//flow control, good when many conditions are tied together and when dealing with long if-else statements

/*
    switch(data to compare){
        case(0): 
            action
            break;
        moreCases(#):
            moreActions   --> also the option for a default action
            moreBreak
    }
 */

switch(today.getDay()){  //--> could this be used to make a scheduler type thing? 
    case(0):
        console.log('Sunday')
        break
    case(1):
        console.log('Monday')
        break
    case(2):
        console.log('Tuesday')
        break
    case(3):
        console.log('Wednesday')
        break
    case(4):
        console.log('Thursday')
        break
    case(5):
        console.log('Friday')
        break
    case(6):
        console.log('Saturday')
        break
    default:
        console.log('Invalid Day')

};


//================ JS OBJECT (similar to a python dictionary)===================
// often best to use const when creating your js object
// keys do not have to be wrapped in strings. You could, but it produces the same result with or without for the keys. The values do ned them if strings (like in python)
const firstObject = {
    name : 'Sean',
    age : 25,
    favoriteColor: 'blue'
}

console.log(firstObject);
console.table(firstObject); //--> makes a nice table layout of the object in the console

console.log(firstObject['age']) // could use either bracket notation (with the key wrapped as a string) or dot notation w/o wrapping (seen below)
console.log(firstObject.age) // there are some times that bracket notation is needed (such as with a loop variable, etc.), but they are otherwise interchangable.

console.log(firstObject.vehicle)
console.log(firstObject.vehicle?.year) //--> key into vehicle IF it exists. Prevents code from breaking, as it would here when we try to key into an undefined value

//adding key: value pairs
firstObject.vehicle = {
    make: 'Tesla',
    model: 'X',
    year: 2020
};
console.table(firstObject)
console.log(firstObject)
console.log(firstObject.vehicle.year) //--> 2020

// delete key: value pairs
delete firstObject.age
console.table(firstObject)


const newKey = 'hairColor'
firstObject.newKey = 'brown'
console.table(firstObject) //--> doing this we get a newKey keu and not our 'hairColor' key that we intended

delete firstObject['newKey']
firstObject[newKey] = 'brown'
console.table(firstObject) // here is one of the cases that we need to use bracket notation as dot notation did not provide the needed response.



//=======in-class exercise===========
const person2 = {
    name: "Max",
    age:31,
    progLanguages:['JavaScript','Python','C++', 'Java'],
    favColor: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}

//Blue, C++, LA Rams, Chicago Fire, Liverpool

console.log(person2.favColor)
console.log(person2.progLanguages[2])
console.log(person2.teams[1].football)
console.log(person2.teams[0].soccer[0])
console.log(person2.teams[1].soccer[1])

const myObject = {
    color: "blue",
    programmingLanguage: "c++",
    sportsTeams: ["la rams", "chicago bears", "liverpool"],
    country: "USA"
  };
  

/*   
//for fun
function checkItemsPresence(obj) {
    return (
      "color" in obj &&
      "programmingLanguage" in obj &&
      "sportsTeams" in obj &&
      obj.sportsTeams.includes("la rams") &&
      obj.sportsTeams.includes("chicago fire") &&
      obj.color === "blue" &&
      obj.programmingLanguage === "c++"
    );
  }
  console.log(checkItemsPresence(myObject)); */

  //============DESTRUCTURING AN OBJECT==============
  const {name, age, progLanguages} = person2
  console.log(name, age, progLanguages)


  function  displayInfo(person){ //--> this works, but we can destructure to clean up the code
    return `${person.name} is ${person.age} years old.`
  }


firstObject.age = 26

  console.log(displayInfo(firstObject))
  console.log(displayInfo(person2))
  
  
  
  const displayInfoArrow = ({name, age, favColor}) => `${name} is ${age} years old whose favorite color is ${favColor}.` //--> destructured to clean up the code
  console.log(displayInfoArrow(person2))
  
  
  function displayWithQuote( quote, {name,  favoriteColor}){
      return `${name}, whose favorite color is ${favoriteColor}, loves the quote: "${quote}"`
    }
    
    const quote = "I know kung fu!"
    console.log(displayWithQuote(quote, firstObject))


    // usning spread operator to create a copy of firstObject object
    const seanObject =  {...firstObject} // makes a copy with a separate location in memory. Therefore, altering one does not alter the other

    console.log(seanObject)
    
    delete seanObject.vehicle
    console.log(seanObject)
    console.log(firstObject)
    
    // doing something similar w/o spread operator
    
    const firstObject2 = firstObject //with this sort of copy, we are pointing to the exact same spot in memory so adjusting one adjusts the other
    delete firstObject2.vehicle
    console.log(firstObject)
    console.log(firstObject2)
    
    const seanObjectWithLanguage = {...seanObject, favoriteLanguage: 'javascript'} //making a copy while also addinng key:value pairs
    console.table(seanObjectWithLanguage)
    
    //could spread multiple objects into one common combined object --> however, watch out for conflicting keys as the earlier instances will be overwritten by later object keys
    //for example, in the below combined, we have a key value name in both objects. However, only the second object's key is retained (name: 'Zapidos' has been overwritten)
    const seanVehicle = {
        make: 'Tesla',
        model: 'X',
        year: '2020',
        name: 'Zapidos'
    }
    
    const combinedObject = {...seanVehicle, ...seanObjectWithLanguage}
    console.table(combinedObject)
    
//one solution...
    const seanVehicle2 = {
        make: 'Tesla',
        model: 'X',
        year: '2020',
        name: 'Zapidos'
    }
    
    const combinedObject2 = {vehicle: {...seanVehicle2}, ...seanObjectWithLanguage}
    console.log(combinedObject2)
    

function displayInfoWithCar({
    name, 
    age, 
    favoriteColor, 
    hairColor, 
    favoriteLanguage, 
    ...vehicle}) {
        console.table(vehicle)
        return `${name} ${age} ${favoriteColor} ${favoriteLanguage}`
}

console.log("===================================")

console.log(displayInfoWithCar(combinedObject))

//=========IN CLASS EXERCISE 2==========

const destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}

/* Create a function called `destructed` that recieves the `destructMe` Object using destructuring. Destruct the title body and author and leave the rest of the attributes in a parameter called `others`.
Print out the title, body, and author to the console. Then print the entire contents of `others` to the console.
 */
function destructed({title, body, author, ...others}){
    return `${title}: ${body}, created by ${author}. \nOther information: ${others}}`
}

console.log(destructed(destructMe))



function destructed({title, body, author, ...others}){
    console.log('title:', title)
    console.log('body:', body)
    console.log('author:', author)
    console.log('others:', others)
}

console.log(destructed(destructMe))


//==================NULLISH OPERATORS==========

const displayFriendInfo = (person) => {
    const friends = person.friends ?? ['dylan']
    const bestFriend = person.friends?.[0] ?? 'Kevin'
    console.log( `${person.name} is friends with `)
    friends.map((friend)=> console.log(friend))
    console.log(` and his bestfriend is ${bestFriend}`)
}
console.log(seanObject.friends)
displayFriendInfo(seanObject)
seanObject.friends = ['brendan', 'sarah', 'ryan']
displayFriendInfo(seanObject)

//==============OBJECT EQUALITY===================
console.log({1:'a'} == {1:'a'})

console.log(firstObject === firstObject2)



//=======truthy/falsy check on an empty object====
console.log({}? 'empty object is truthy': 'is falsy') //ternary 

if ({}) { //if statment. Both equate to the same outcome
    console.log('empty object is truthy')
} else {
    console.log('empty object is falsy')
}
console.log(Object.keys({1:'a'}))


const emptyObject = {}
console.log(Object.keys(emptyObject).length > 0? 'Object is not empty': 'object is empty') //little wordier with an object
console.log([].length > 0? 'Array is not empty': 'Array is empty') //more laconic with arrays

//===========ITERATING OVER OBJECTS=======================

const seanObjectKeys = Object.keys(seanObject)

for(let i=0; i<seanObjectKeys.length; i++){
    console.log(`Value of ${seanObject[i]}: ${seanObject[seanObjectKeys[i]]}`)
}

for (let k of Object.keys(seanObject)){
    console.log(`Value of ${k}: ${seanObject[k]}`)
}

console.log(Object.entries(seanObject))
for(const [k,v] of Object.entries(seanObject)){
    console.log('ENTRIES')
    console.log('Value of ${k}: ${v}')
}

const seanObjectValues = Object.values(seanObject)
for (let i = 0; i<seanObjectValues.length; i++){
    console.log(seanObjectValues[i])
}

for (const k in seanObject){
    console.log(k)
}

for (const k in seanObject){
    console.log(k, seanObject[k])
}



//==>
console.log((() => ({1:'a'}))())


//===========THIS===========
const comedian = {
    firstName: "Chris",
    lastName:  "Rock",
    displayFullName: () => function() {return `${this.firstName} ${this.lastName}`},
    displayFullNameArrow: () => `${this.firstName} ${this.lastName}`

}

console.log(comedian.displayFullName())


console.log(typeof [])
console.log([] instanceof Array)
console.log(Array.isArray([]))
console.log(typeof {})
console.log({} instanceof Object)
console.log([] instanceof Object)
console.log(typeof 'avd')
console.log(typeof 123)
console.log(typeof null)
console.log(null instanceof Object)

//========Prototype=======

const Person = function(name, age) {
    this.name = name
    this.age = age

    this.displayInfo = function(){console.log(`${this.name} ${this.age}`)}
}

const person = new Person('dylan', '33')

console.log(person.name)
console.log(person.displayInfo())



//======CLASSES (es6)==========

class Human{
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    displayInfo(){
        return `${this.name} ${this.age} ${this.gender}`
    }
}

const human = new Human('janis joplin', 24, 'female')

console.log(human.name)
console.log(human.displayInfo)
console.table(human)

class Child extends Human{ //-->  Child class is inheriting from Human class
    constructor(name, age, gender, talking){
        super(name, age, gender)
        this.talking = talking
    }

    isTalking(){
        console.log(this.talking ? 'Child is talking' : 'Child is not talking')
    }
    
    displayInfo(){
        return `${this.name} ${this.age} ${this.gender} ${this.talking? 'talking' : 'not talking'}`
    }

}

const child = new Child('Bambam', 3, 'male', false)
console.table(child)
child.isTalking()


//================IN-CLASS EXERCISE===============
/* make model year color
method to display info

change color method (paintjob) */

// Create car class with make, model year and color attributes. Add at least two methods: displayInfo & paintJob

class Car{
    constructor(make, model, year, color){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
    }

    displayInfo(){
        return `This is a ${this.color} ${this.year} ${this.make} ${this.model}.`
    }

    paintJob(newColor){
        this.color = newColor
        console.log(`You've given your ${this.make} ${this.model} a paint job! It is now ${newColor}. Looking good!`)
    }
}

const car = new Car('Kia', 'Telluride', 2022, 'White')
console.log(car.displayInfo())

car.paintJob('Maroon')
console.log(car)
console.log(car.displayInfo())


//===========closure =========
/* 
outer(){
    code
    inner(){
        code
    }
    return inner
}
*/

function classManager(){
    console.log('In class manager')
    const studentArray = []
    function addStudents(...students){
        studentArray.push(...students)
        console.log('student array', studentArray)
    }
    return addStudents
}

const matrix123 = classManager()

matrix123('ben', 'david')
matrix123('michael', 'sima')

//===========JAVASCRIPT CALL STACK==============

function one(){
    console.log('in one') // 1
    two()
    console.log('finished') // 6
}

one()

function two(){
    console.log('in two') //2
    three()
    console.log('remove two from call stack') // 5
}

function three(){
    console.log('in three') //3
    console.log('remove three from call stack') //4
    return null
}

console.log('above timeout')
setTimeout(()=>console.log('in timeout'), 1000)
console.log('below timeout')


//==========CALLBACK==========
//a function that is called from another function???(check this)
//listens for an event and then calls the function once the events have been reached

function doHomework(subject, callback){
    console.log(`Starting my ${subject} homework.`)
    callback()
}

// const homework{
//     javascript: function(){console.log('Doing homework')}
// }

function javascript(){
    console.log('completing javascript hw')
}

doHomework('javascript', javascript)


//========PROMISE=========
//promise that function will be fulfilled

function checkEven(num){
    return new Promise((res, reject) => {
    if (num % 2 === 0){
        setTimeout(() => res(true), 3000)
    } else reject(false)
    })
}

console.log(checkEven(10))
console.log('after promise')

/* checkEven(11).then((result)=>console.log(result)).catch((error)=>console.log(error))
console.log('after promise') */


async function handlePromise(num){
    await checkEven(num).then((result)=>console.log(result)).catch((error)=>console.log(error))
    console.log('after promise fulfilled')
}

handlePromise(12)


const handlePromiseArrow = async (num) => {
    await checkEven(num).then((result)=>console.log(result)).catch((error)=>console.log(error))
    console.log("after promise in arrow")
}

handlePromiseArrow(100)