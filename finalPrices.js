var finalPrices = function(prices) {
  var outputArray = [];
  var priceLength = prices.length

  for (let i = 0; i < priceLength; i++) {

    if (i < priceLength - 1) {

      for (let j = i + 1; j < priceLength; j++) {

        if (prices[j] <= prices[i]) {

          outputArray.push(prices[i] - prices[j])
          j = priceLength
        } else if (j === priceLength - 1) {
          outputArray.push(prices[i])
        }
      }
    } else {
      outputArray.push(prices[i])
    }

  }
  return outputArray
};

var priceArray = [8,4,6,2,3]

var output = finalPrices(priceArray)
console.log (output)//[4,2,4,2,3]
