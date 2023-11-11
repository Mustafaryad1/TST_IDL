
const doubleNum = (num) => {
    return num * 2;
}

// Declarative 
const processArrayDecWay = (arr,callback) => {
    return  arr.map(callback);
}

// example 
console.log(processArrayDecWay([1,2,3,4],doubleNum));


// imperative
const processArrayImpWay = (arr,callback) => {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// example
console.log(processArrayImpWay([1,2,3,4],doubleNum));