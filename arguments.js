// function sumArgs() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum
// }

// console.log(sumArgs(1, 2, 3, 4)); 

// function sumRest(...array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum
// }

// console.log(sumRest(1, 2, 3, 4)); 


// Function.prototype.myBind = function (context, ...bindArgs) {
//     let that = this;
//     return function(...calltimeargs) {
//         that.apply(context, bindArgs.concat(calltimeargs));
//     }
// }

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// let markovboundpav = markov.says.myBind(pavlov);
// markovboundpav("meow", "a tree");
// // Pavlov says meow to a tree!
// // true


function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce(function (acc,ele) {
                return acc + ele;
            })
        };
        return _curriedSum;
    }
}


const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
    let arr = [];
    let that = this;
    return function innerFunction(arg) {
        arr.push(arg);
        if (arr.length === numArgs) {
            return that(...arr);
        };
        return innerFunction;
    }
}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  };
const collect = sumThree.curry(3);
console.log(collect(5)(30)(20));