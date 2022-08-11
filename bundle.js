(() => {
  // src/money/money.ts
  function getMoney() {
    return 1e3;
  }

  // src/index.ts
  var money = getMoney();
  console.log(money)
})();
