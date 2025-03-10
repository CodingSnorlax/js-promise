// (1) 註冊 promise (不帶參數)
const checkScore1 = new Promise((resolve, reject) => {
  console.log("正在批改中");
  setTimeout(() => {
    const score = Math.round(Math.random() * 100);
    if (score >= 60) {
      //resolve的結果用then去接
      resolve(score);
    } else {
      //reject的結果用catch去接
      reject("不及格！！！");
    }
  }, 2000);
});

//Promise 接收
checkScore1
  .then((data) => {
    console.log("2", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

// (2) 註冊 promise (帶參數，需要 return)
const checkScore2 = score => {
  return new Promise((resolve, reject) => {
    if (score >= 60) {
      resolve(score);
    } else {
      reject("不及格！");
    }
  });
};

// Promise 接收 (帶參數)
checkScore2(40)
  .then((data) => {
    console.log("3", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
