
function isDividable(dividend, divisor) {
    return dividend % divisor === 0;
}
function isBetween(num, lowerNum, higherNum) {
    return num >= lowerNum && num <= higherNum;
}
function isIncluded(whole, piece) {
    let wholeString = whole.toString();
    let pieceString = piece.toString();
    return wholeString.indexOf(pieceString) >= 0;
}

function replacePart(number, factor, replacement) {
    if (isDividable(number, factor) || isIncluded(number, factor)) {
        return replacement;
    } else {
        return "";
    }
}
/**
 * Dividable by 3 produces fuzz, 5 produces buzz.
 */
function fizzbuzz_thomas(number) {
    let returnString = "";
    if (!Number.isInteger(number) || !isBetween(number, 1, 100)) {
        return "error!"
    }
    
    returnString += replacePart(number, 3, "fizz");
    returnString += replacePart(number, 5, "buzz");
    returnString += replacePart(number, 7, "pass");

    if (returnString === "") {
        return number;
    } else {
        return returnString;
    }
}

// const fizzbuzz = require("./fizzbuzz");
const fizzbuzz = fizzbuzz_thomas;

test('should 1 to be 1', () => {
    expect(fizzbuzz(1)).toBe(1);
});

test('should 2 to be 2', () => {
    expect(fizzbuzz(2)).toBe(2);    
});

test('should 3 to be fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");    
});

test('should 4 to be 4', () => {
    expect(fizzbuzz(4)).toBe(4);
});

test('should 5 to be buzz', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});

test('should 7 to be pass', () => {
    expect(fizzbuzz(7)).toBe("pass");
});

test('should 15 to be fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test('should 4545 to be error!', () => {
    expect(fizzbuzz(4545)).toBe("error!");
});

test('should 0 to be error!', () => {
    expect(fizzbuzz(0)).toBe("error!");
});

test('should "10" to be error!', () => {
    expect(fizzbuzz("10")).toBe("error!");
});

test('should 1.2 to be error!', () => {
    expect(fizzbuzz(1.2)).toBe("error!");
});

test('should true be error!', () => {
    expect(fizzbuzz(true)).toBe("error!");
});

// -----------------------

test('should 13 to be fizz', () => {
    expect(fizzbuzz(13)).toBe("fizz");
});

test('should 25 to be buzz', () => {
    expect(fizzbuzz(25)).toBe("buzz");
});

test('should 35 to be fizzbuzz', () => {
    expect(fizzbuzz(35)).toBe("fizzbuzzpass");
});

test('should 53 to be fizzbuzz', () => {
    expect(fizzbuzz(53)).toBe("fizzbuzz");
});
