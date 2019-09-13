var maxProfit = function(prices) {
  let profit = 0;
  let idx = 0;
  let hasStock = false;
  if (prices.length === 1) {
    return profit;
  }
  let boughtPrice;
  while (idx < prices.length) {
    if (!hasStock) {
      let shouldBuy = false;
      for (let i = idx; i < prices.length; i++) {
        if (prices[idx] < prices[i]) {
          shouldBuy = true;
          break;
        }
      }
      if (shouldBuy) {
        boughtPrice = prices[idx];
        hasStock = true;
      }
    } else {
      if (prices[idx] > boughtPrice && (prices[idx + 1] && prices[idx] > prices[idx + 1] || !prices[idx + 1])) {
        profit += prices[idx] - boughtPrice;
        hasStock = false;
      }
    }

    idx++;
  }

  return profit;
};


const profit = (prices) => {
  // return sum(max(prices[i + 1] - prices[i], 0) for i in range(len(prices) - 1))
  let sum = 0;
  prices.forEach((price,idx) => {
    if (idx !== prices.length - 1) {
      sum += Math.max(prices[idx + 1] - price, 0);
    }
  });

  return sum;
}

console.log(profit([6,1,3,2,4,7]));