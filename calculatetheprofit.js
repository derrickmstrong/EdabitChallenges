const profit =  info => {
    return `We have made $${Math.round((info.sellPrice - info.costPrice) * (info.sold))} in profit and currently have ${info.inventory - info.sold} items left in inventory.`
}

console.log(
  profit({
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 2400,
    sold: 2390
  })
);