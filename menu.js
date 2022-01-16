///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/
const pizza = {
    name:'meat lovers',
    price: 20,
    category: 'entree',
    popularity: 10,
    rating: 100, 
    tags: ['sausage', 'bacon', 'stuffed crust', 'gluten-free']
}

console.log(pizza)
//CODE HERE



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/
console.log(pizza.popularity)
//CODE HERE


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/
console.log(pizza.tags[1])
//CODE HERE


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
delete pizza.price

console.log(pizza)
//CODE HERE


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/
console.log(pizza.category)
//CODE HERE


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/


class Food {
    constructor(name, price, category, popularity, rating, tags){
        this.name = name
        this.price = price
        this.category = category
        this.popularity = popularity
        this.rating = rating
        this.tags = tags
    }
}

let food1 = new Food('pasta', 12, 'entree', 6, 8, ['saucy', 'with meat'])
let food2 = new Food('sandwich', 8, 'lunch', 9, 7, ['wheat bun', 'with fries'])
let food3 = new Food('soup', 6, 'appetizer', 5, 6, ['bowl', 'with roll', 'spicy'])
let food4 = new Food('chicken wings', 9, 'appetizer', 10, 4, ['buffalo sauce', 'with ranch'])
let food5 = new Food('milkshake', 5, 'dessert', 7, 9, ['choose your own mix ins', 'vanilla base'])

foodArr = [food1, food2, food3, food4, food5]
//CODE HERE

console.log(food1)

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/
function containsTags(array, name, callback){
    if (array.includes(name) === true) {
        return callback(true)
    } else {
        return callback(false)
    }
}
//CODE HERE
containsTags(foodArr, tags[i], result => {
    for(let i=0; i < tags.length; i++)
     if (result === true){
        console.log('includes tags')
    } else {
        console.log('does not include tags')
    }
})
// const filteredFood = foodArr.filter(/* CALLBACK HERE */)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE