module.exports =
    function check(str, bracketsConfig) {
        let config = bracketsConfig.flat();
        let stack = [];

        for (let bracket of str) {
            // look for the index of the current bracket in bracketsConfig
            let brIndex = config.indexOf(bracket);

            // if the current element is outside the bracketsConfig
            if (brIndex === -1) {
                continue;
            }

            // when the opening and closing brackets are the same
            if (config[brIndex] === config[stack[stack.length - 1]]) {
                stack.pop();
                continue;
            }

            // if the current bracket is opening (even indexes)
            if (brIndex % 2 === 0) {
                // push it's closing bracket (odd indexes) to the stack
                stack.push(brIndex + 1);
            } else {
                // if the current bracket is closing (odd indexes)
                // pop the last element off the stack and compare both
                if (stack.pop() !== brIndex) {
                    return false;
                }
            }
        }
        // if the stack is empty, 
        // all the brackets are balanced! Hooray!
        return stack.length === 0;
    };
