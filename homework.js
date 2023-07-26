// Q1:
// Use the array of shop items provided and present the the information in the following format

/* ```
=======================================
Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
Category: shoes
=======================================
Name: 	 Adidas NMD R1
Price: 	 128
About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category: shoes
=======================================
Name: 	 Gucci Oversize T-shirt with Interlocking G
Price: 	 580
About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category: shirts
=======================================
Name: 	 Nike Sportswear Club
Price: 	 18.97
About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category: shirts
=======================================
Name: 	 Spanx Flare Jeans, Vintage Indigo
Price: 	 148
About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category: pants
=======================================
Name: 	 Bonobos Premium Stretch Jeans
Price: 	 69
About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category: pants
``` */

const shopItems = [{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]


function presentItems(obj){
    for(const item of obj){
        console.log('===========================================')
        console.log(`Name: ${item.name}`)
        console.log(`Price: ${item.price}`)
        console.log(`Description: ${item.desc}`)
        console.log(`Category: ${item.category}`)
    }
}

presentItems(shopItems) //output: as specified 

//====================================================================
//====================================================================

/* Question 2:
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
```
pizza contains:
Deep Dish
South Side Thin Crust
tacos contains:
Anything not from Taco bell
burgers contains:
Portillos Burgers
ice_cream contains:
Chocolate
Vanilla
Oreo
shakes contains:
oberwise contains:
Chocolate
dunkin contains:
Vanilla
culvers contains:
All of them
mcDonalds contains:
Sham-rock-shake
cupids_candies contains:
Chocolate Malt
```
Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
} */

//HOW DO I DO THIS?!?!

//====================================================================
//====================================================================

/*Question 3:

Create a Promised based function that will check a string to determine if it's length is greater than 10.

If the length is greater than 10 then resolve it and console log "Big word". 

If the length of the string is less than 10 then reject it and  console log "Small String"*/

function checkString(ord){
    return new Promise((res, reject)=> {
        if (ord.length > 10){
            res('Big word');
        } else reject('Small string')
    })
}


console.log(checkString('eyjafjallajökull'))
console.log(checkString('staðr'))
console.log(checkString('frábært'))
console.log(checkString('vestmannaeyjar'))
//====================================================================
//====================================================================

/*Question 4:
Create a base class of GameMember and 2 children classes of Dealer, Player

both dealer and player have:

hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

hit() : ability to add  a random number [1-13] to their hand

When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

When a Player hits they can hit as long as their total is under 21

Use the randomNumber function provided below to gernerate a random number 1-12*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

class GameMember{
    constructor(){
        this.hand = [randomNumber(1,13), randomNumber(1,13)]
        // this.hit = hit()
    }

    hit() {
        if (this instanceof Dealer) {
            let total = this.hand.reduce((sum, card) => sum + card, 0);
            if (total < 17) {
                this.hand.push(randomNumber(1, 13));
                console.log("Dealer hits", this.hand);
            } else {
                console.log("Dealer cannot hit.");
            }
        } else if (this instanceof Player) {
            let total = this.hand.reduce((sum, card) => sum + card, 0);
            if (total < 21) {
                this.hand.push(randomNumber(1, 13));
                console.log("Player hits", this.hand);
            } else {
                console.log("Player cannot hit.");
            }
        }
    }
}

class Dealer extends GameMember{
    constructor(hand){
        super(hand)
    }
    
    DealerPlay(){
        console.log(`Dealer has: ${this.hand}`)
        this.hit()
    }
}

class Player extends GameMember{
    constructor(hand){
        super(hand)
    }

    PlayerPlay(){
        console.log(`Player has: ${this.hand}`)
        this.hit()
    }
}

const dealer = new Dealer()
const player = new Player()

console.log(dealer.DealerPlay())
console.log(player.PlayerPlay())

//====================================================================
//====================================================================

/*Question 5:

Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed

1:

2:

3:
*/