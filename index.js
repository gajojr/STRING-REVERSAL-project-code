//ES6
const reverseStr1 = str => str.split('').reverse().join('');

//ES5
/*function reverseStr1(str) {
    return str.split('').reverse().join('');
}*/

//ES6
const reverseStr2 = str => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

//ES5
/*function reverseStr2(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}*/

//ES6
const reverseStr3 = str => {
    for (let char of str) {
        newStr = char + newStr;
    }

    return newStr;
}

//ES5
/*function reverseStr3(str) {
    for (let char of str) {
        newStr = char + newStr;
    }

    return newStr;
}*/

//ES6 one liner hardly readable
const reverseStr4 = str => str.split('').reduce((reversed, char) => char + reversed);

//ES6 more readable
/*const reverseStr4 = str => {
    return str.split('').reduce((reversed, char) => char + reversed);
}*/

//ES6 one liner hard to read
const reverseStr5 = str => str.split('').reduceRight((reversed, char) => reversed + char);

//ES6 more readable
/*const reverseStr5 = str => {
    return str.split('').reduceRight((reversed, char) => reversed + char);
}*/


console.log(reverseStr1('word'))