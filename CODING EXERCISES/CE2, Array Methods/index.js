function transformToObjects(numberArray) {
	return numberArray.map((number) => {
		return { val: number };
	});
}

/*
EXERCISE: ARRAY METHODS
Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.

For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

LEARNING OBJECTIVE:
Derive a new array, based on existing array, where every element was transformed to an object.

HINTS:
Use the built-in map() method to transform all values in an array

map() takes a function as an argument - this function will be executed for every array item

SOLUTION EXPLANATION:
Inside the transformToObjects() function, you should use the map() method to transform all values of the received numberArray parameter (which will be an array of numbers).

This code uses an arrow function. Of course, you could also use a "normal function" (with the function keyword).
*/
