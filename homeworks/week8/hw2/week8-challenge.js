const data = {
  total: 0,
  first: 0,
  second: 0,
  third: 0,
  none: 0,
  error: 0,
};

const delay = 200;
const max = 200;
const errorMessage = "error";

const API_URL =
  "https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery";

// 抽獎
function getPrize(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data;
      try {
        data = JSON.parse(xhr.response);
      } catch (err) {
        cb(errorMessage);
        return;
      }

      if (!data.prize) {
        cb(errorMessage);
        return;
      }

      cb(null, data);
    } else {
      cb(errorMessage);
    }
  };

  xhr.onerror = function () {
    cb(errorMessage);
  };

  xhr.send();
}

function update() {
  const keys = ["first", "second", "third", "none", "error"];
  const total = data.total;
  document.querySelector(".total").innerText = total;
  for (key of keys) {
    document.querySelector("." + key).innerText =
      (Number(data[key]) * 100) / total;
  }
}

function loop() {
  if (data.total >= max) return;
  getPrize((err, response) => {
    data.total++;
    if (err) {
      data.error++;
    } else {
      data[response.prize.toLowerCase()]++;
    }
    update();
    setTimeout(loop, delay);
  });
}

loop();
