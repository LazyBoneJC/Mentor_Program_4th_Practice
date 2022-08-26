const form = document.querySelector(".apply-form");

form.addEventListener("submit", function (e) {
  // preventDefault 放前後都有一樣的效果
  e.preventDefault();

  const warning = document.createElement("div");
  warning.classList.add("apply-form__notice");
  warning.classList.add("warning");
  warning.innerText = "上方欄位為必填，請確實填寫。";

  let isValid = true;
  let radioChecked = -1;
  for (let i = 0; i <= 5; i++) {
    const cloneWarning = warning.cloneNode(true);
    let input = document.forms["apply-form"][i].value;
    let radioBtn_1 = document.forms["apply-form"][3];
    let radioBtn_2 = document.forms["apply-form"][4];
    // console.log(i, input);

    if (i === 3) {
      if (!radioBtn_1.checked && !radioBtn_2.checked) {
        document.querySelector("#input_4_5").appendChild(cloneWarning);
        isValid = false;
        i++;
      }
    } else if (input === "") {
      document.querySelector(`#input_${i + 1}`).appendChild(cloneWarning);
      isValid = false;
    }

    if (radioBtn_1.checked) {
      radioChecked = 3;
    } else if (radioBtn_2.checked) {
      radioChecked = 4;
    }
  }

  if (isValid) {
    // let warn = document.querySelector(".warning");
    // document.querySelectorAll(".input-block__input").removeChild(warn);
    alert(
      `
      使用者資料：
      暱稱：${document.forms["apply-form"][0].value}
      電子郵件：${document.forms["apply-form"][1].value}
      手機號碼：${document.forms["apply-form"][2].value}
      報名類型：${document.forms["apply-form"][radioChecked].value}
      怎麼知道這個活動的：${document.forms["apply-form"][5].value}
      其他建議：${document.forms["apply-form"][6].value}
    `
    );
  }

  // e.preventDefault();
});
