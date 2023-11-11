const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncFun1 = async () => {
  await delay(1000);
  console.log("asyncFun1");
};

const asyncFun2 = async () => {
  await delay(2000);
  console.log("asyncFun2");
};

const asyncFun3 = async () => {
  await delay(3000);
  console.log("asyncFun3");
};

(async () => {
  await asyncFun1();
  await asyncFun2();
  await asyncFun3();
})();
