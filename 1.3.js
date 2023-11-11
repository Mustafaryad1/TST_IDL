const convertNestedArrayStringToArray = (str) => {
    const arr = str.split("[").join(",").split("]").join(",").split(",");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "") {
        result.push(arr[i]);
      }
    }
    return result.map((item) => +item);
  };
  
  // example
  console.log(convertNestedArrayStringToArray("[[1,2,[3]],4]"));
  
  // convert nested arrays to array
  function convertNestedArraysToArray(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(convertNestedArraysToArray(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
  const flatArray = convertNestedArraysToArray(nestedArray);
  console.log(flatArray);
  