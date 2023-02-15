function createWallet(initMoney) {
  var money = initMoney;
  return {
    add: function (num) {
      money += num;
    },
    deduct: function (num) {
      if (num >= 10) {
        money -= 10;
      } else {
        money -= num;
      }
    },
    getMoney: function () {
      return money;
    },
  };
}

var myWallet = createWallet(99);
myWallet.add(1);
myWallet.deduct(100);
myWallet.money = 10;
console.log(myWallet.getMoney());
