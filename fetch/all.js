const url = "https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json";

//fetch本身就是設計好的promise，支援then與catch的實作
fetch(url)
.then(res => res.json())
.then(data => console.log('data',data))
.catch(err => console.log(err))