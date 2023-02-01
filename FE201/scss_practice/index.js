document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let hasError = false;
  let values = {};

  const elements = document.querySelectorAll(".required");
  for (let element of elements) {
    const radios = element.querySelectorAll("input[type=radio]");
    const input = element.querySelector("input[type=text]");
    let isValid = true;

    // 若 input 有值，將 input 的 name 和 value 存到 values 這個 object 當中
    if (input) {
      values[input.name] = input.value;
      if (!input.value) {
        isValid = false;
      }
    } else if (radios.length) {
      // 若 radios.length > 0
      // 宣告一個陣列，內容包含 radios 展開的兩個 input 物件，再用 .some() 確認裡面兩個物件的 checked 是 true of false
      // 最後 assign 給 isValid
      // 用到 展開運算符(Spread Operator) & .some()
      // arrow function 比較簡潔 易讀性高
      isValid = [...radios].some((radio) => radio.checked);
      if (isValid) {
        let checkedRadio = element.querySelector("input[type=radio]:checked");
        values[checkedRadio.name] = checkedRadio.value;
      }
    } else {
      continue;
    }

    if (!isValid) {
      element.classList.remove("hide-error");
      hasError = true;
    } else {
      element.classList.add("hide-error");
    }
  }

  if (!hasError) {
    console.log(values);
    alert(JSON.stringify(values));
  }
});
