const operations = {
    add: (num1, num2) => {
        return typeof num1 !== 'number' || typeof num2 !== 'number' ? false : num1 + num2;
    },
    sub: (num1, num2) => {
        return typeof num1 !== 'number' || typeof num2 !== 'number' ? false : num1 - num2;
    },
    div: (num1, num2) => {
        let mess = "";
            if (num2 === 0) {
                mess = "Don't use the 0 as an value";
                return mess;
            }else if (typeof num1 !== "number" || typeof num2 !== "number") {
                mess = "Use only numbers";
                return mess;
            } else {
                return num1 / num2;
            }
    },
    mul: (num1, num2) => {
        return typeof num1 !== 'number' || typeof num2 !== 'number' || num2 === 0 ? false : num1 * num2;
    },
};


module.exports = operations;
