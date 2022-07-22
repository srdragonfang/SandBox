// ANCHOR * [Errors⚠]

try {                           // block of code to try
undefinedFunction();
}
catch(err) {                    // block to handle errors
console.log(err.message);
}

// ANCHOR * [Throw error⚠]
throw "My error message";    // throw a text
throw new Error("no element selected");