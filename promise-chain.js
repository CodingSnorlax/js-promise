//第一個promise
function correctTest(name) {
  return new Promise((resolve, reject) => {
    console.log("批改作業中");
    setTimeout(() => {
      const score = Math.round(Math.random() * 100);
      const data = { name, score };
      console.log('成績出爐:', score);
      if (score >= 20) {
        resolve(data);
      } else {
        reject({score, msg:"掰掰，您已被退學！"});
      }
    }, 2000);
  });
}

//第二個promise
function checkReward(data) {
  return new Promise((resolve, reject) => {
    console.log("正在檢查獎品中");
    setTimeout(() => {
      if (data.score >= 90) {
        resolve({ gift: "電影票乙張", score: data.score });
      } else if (data.score >= 60 && data.score < 90) {
        resolve({ gift: "吉伊卡哇貼紙乙張", score: data.score });
      } else {
        reject({ score: data.score, msg: "即將受到毒打一頓！" });
      }
    }, 2000);
  });
}

//promise chain
correctTest("Ming")
  .then((data) => {
    //.then結果必定來自resolve
    return checkReward(data);
  })
  .then((reward) => console.log("獎品:", reward.gift))
  .catch((error) => console.log(`分數${error.score}`, error.msg)); //catch可以接收兩個promise之中任一的錯誤

//async、await in promise chain (可讀性更高)
const init = async function () {
  try {
    //暫停等待回傳
    const studentA = await correctTest("Billy"); //then回傳的到studentA
    console.log("studentA", studentA);
    //兩秒後執行下一段語法
    const rewardA = await checkReward(studentA);
    console.log("rewardA", rewardA);
  } catch (error) {
    console.log("error", error.msg);
  }
};

init();
