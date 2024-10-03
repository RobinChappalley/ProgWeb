const register = [
  {
    tableID: 0,
    orders: [
      {
        item: "coffee",
        qty: 3,
        price: 3.5,
      },
      {
        item: "salad",
        qty: 3,
        price: 8,
      },
      {
        item: "steak",
        qty: 3,
        price: 28,
      },
      {
        item: "ice cream",
        qty: 3,
        price: 5,
      },
    ],
  },
  {
    tableID: 1,
    orders: [
      {
        item: "coffee",
        qty: 2,
        price: 3.5,
      },
      {
        item: "salad",
        qty: 2,
        price: 8,
      },
      {
        item: "steak",
        qty: 2,
        price: 28,
      },
      {
        item: "ice cream",
        qty: 2,
        price: 5,
      },
    ],
  },
];

let tvarate = 8.1;
let tiprate = 10;

function getSubTotal(tableNumber) {
  let total = 0;
  if (register.find((table) => table.tableID === tableNumber)) {
    register[tableNumber].orders.forEach((order) => {
      total += order.price * order.qty;
    });

    return total;
  } else console.log("Cette table n'existe pas");
}
function calcPercentage(tva, price) {
  return +((price * tva) / 100).toFixed(2);
}
function total(tableNumber) {
  return {
    subTotal: getSubTotal(tableNumber),
    tax: calcPercentage(tvarate, getSubTotal(tableNumber)),
    tip: calcPercentage(tiprate, getSubTotal(tableNumber)),
    total: `${
      calcPercentage(tiprate, getSubTotal(tableNumber)) +
      calcPercentage(tvarate, getSubTotal(tableNumber)) +
      getSubTotal(tableNumber)
    }`,
  };
}
const split = (ppl, tableNumber) => {
  return roundToFiveCents(+total(tableNumber).total / ppl).toFixed(2);
};
function roundToFiveCents(price) {
  return Math.round(price / 0.05) * 0.05;
}
console.log(total(1));
console.log(split(3,1));