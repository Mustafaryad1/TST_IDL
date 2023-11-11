const originalObject = {
    someProperty: "Original Value",
  };
  
  const proxyObject = new Proxy(originalObject, {
    get: function (target, property) {
      return "404";
    },
  });
  
  console.log(proxyObject.someProperty);
  