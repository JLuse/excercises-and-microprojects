var updateMarketValue = function (ele) {
  var sharesOwned = parseFloat($(ele).find('.shares input').val());
  var marketPrice = parseFloat($(ele).find('.marketPrice input').val());

  // market value is shares times market price per share
  var marketValue = sharesOwned * marketPrice;
  $(ele).children('.marketValue').html(marketValue);

  return marketValue;
}

var updateUnrealizedProfit = function (ele, marketValue) {
  var sharesOwned = parseFloat($(ele).find('.shares input').val());
  var costPerShare = parseFloat($(ele).find('.cost input').val());
  var costOfPurchase = sharesOwned * costPerShare;

  // unrealized profit is market value minus cost of purchase
  var unrealizedProfit = marketValue - costOfPurchase;
  $(ele).children('.profit').html(unrealizedProfit);

  return unrealizedProfit;
}