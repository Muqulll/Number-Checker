function  isPositive(number){
        if (number > 0){
            return `positive: true`;
        }
        return 'positive: false';
}

function  isNegative(number){
        if (number < 0){
            return `negative: true`;
        }
        return 'negative: false';
}

function  isZero(number){
        if (number === 0){
            return `zero: true`;
        }
        return 'zero: false';
}


function  isEven(number){
        if (number % 2 === 0){
            return `even: true, odd: false`;
        }
        return 'even: false, odd: true';
}

function  describeNumber(number){
        return `{ ${isPositive(number)}, ${isNegative(number)}, ${isZero(number)}, ${isEven(number)} }`
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));