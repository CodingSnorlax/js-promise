const url =
  "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json";

//fetch本身就是設計好的promise，支援then與catch的實作
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log("data", data))
//   .catch((err) => console.log(err));

//   XMLHttpRequest 改成自訂 promise 格式
function getUrl(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

getUrl(url)
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err));
