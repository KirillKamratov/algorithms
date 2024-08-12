// задача - получить пример в виде строки, распарсить из инфиксной, в постфиксную форму и посчтиать

const isOperator = (symb) => {
    const operators = ['+', '-', '/', '*'];
    return operators.includes(symb);
}


const priority = {
    '(': 0,
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1
};


const convertToPostfix = (str) => {
    let stack = [];
    let array = str.split(' ');
    let result = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (!isNaN(array[i])) {
            result.push(array[i]);
        }
        if (isOperator(array[i])) {
            while (stack.length !== 0 && priority[stack[stack.length - 1]] > priority[array[i]]) {
                result.push(stack.pop());
            }
            stack.push(array[i]);
        }
        if (array[i] === '(') {
            stack.push(array[i]);
        }
        if (array[i] === ')') {
            while (stack[stack.length - 1] !== '(') {
                result.push(stack.pop());
            }
            stack.pop();
        }
    }
    while (stack.length > 0) {
        result.push(stack.pop());
    }
    return result
};


const func = (str) => {
    let stack = [];
    let array = convertToPostfix(str);
    for (let i = 0; i <= array.length - 1; i++) {
        if (isOperator(array[i])) {
            let a = Number(stack.pop());
            let b = Number(stack.pop());
            switch (array[i]) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
            }
        } else {
            stack.push(Number(array[i]));
        }
    }
    return stack;
};

console.log(func('5 * ( ( ( 9 + 8 ) * ( 4 * 6 ) ) + 7 )')); // 2075
console.log(func('( ( 9 + 12 ) * 3 / ( 1 + 2 ) ) * 2 + 8')) // 50