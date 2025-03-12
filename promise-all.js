//情境：對三個不同的來源發出請求
const correctTest = (name) => {
  return new Promise((resolve, reject) => {
    console.log("作業批改ing");

    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      resolve({
        name,
        score,
      });
    }, Math.random() * 10000);
  });
}

//當所有request都完成後，就會觸發then
Promise.all([
  correctTest("吉伊卡哇"),
  correctTest("小八貓"),
  correctTest("烏薩奇"),
]).then((res) => {
  console.log("res", res);
});
