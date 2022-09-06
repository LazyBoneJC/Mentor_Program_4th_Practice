const api_endpoint =
  "https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery";
const lottery = document.querySelector(".lottery");
const lottery_btn = document.querySelector(".lottery-btn");
const container = document.querySelector(".banner");

lottery_btn.addEventListener("click", function () {
  // AJAX - Asynchronous Javascript And XML
  // 通常出現 {"prize": "FIRST"}
  // 注意 API 偶爾會出現 {"error": true}
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      const prizeDesc = document.createElement("h1");
      const lotteryBtn = document.createElement("div");
      lotteryBtn.classList.add("lottery-btn");
      lotteryBtn.classList.add("lottery-btn-continue");
      lotteryBtn.innerText = "繼續抽獎";

      if (json.prize) {
        // console.log(`prize: ${json.prize}`);
        lottery.classList.toggle("hide-lottery");
        container.className = "banner";
        switch (json.prize) {
          case "FIRST":
            prizeDesc.innerText = "恭喜你中頭獎了！日本東京來回雙人遊！";
            container.appendChild(prizeDesc);
            container.appendChild(lotteryBtn);
            container.classList.add("first-prize");
            break;
          case "SECOND":
            prizeDesc.innerText = "二獎！90 吋電視一台！";
            container.appendChild(prizeDesc);
            container.appendChild(lotteryBtn);
            container.classList.add("second-prize");
            break;
          case "THIRD":
            prizeDesc.innerText =
              "恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！";
            container.appendChild(prizeDesc);
            container.appendChild(lotteryBtn);
            container.classList.add("third-prize");
            break;
          case "NONE":
            prizeDesc.innerText = "銘謝惠顧";
            container.appendChild(prizeDesc);
            container.appendChild(lotteryBtn);
            container.classList.add("no-prize");
            break;
        }

        const lottery_btn_continue = document.querySelector(
          ".lottery-btn-continue"
        );

        lottery_btn_continue.addEventListener("click", function () {
          lottery.classList.toggle("hide-lottery");
          container.className = "banner";
          lottery_btn_continue.remove();
          container.querySelector("h1").remove();
        });
      } else {
        console.log(`error: ${json.error}`);
        alert("系統不穩定，請再試一次");
      }
    } else {
      console.log(request.status, "err");
    }
  };

  request.onerror = function () {
    console.log(request.status, "error");
  };

  request.open("get", api_endpoint, true);
  request.send();
});
