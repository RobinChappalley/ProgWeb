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

//CORRECTION
// "use strict";

// const register = [
//   {
//     tableID: 0,
//     orders: [
//       {
//         item: "coffee",
//         qty: 3,
//         price: 3.5
//       },
//       {
//         item: "salad",
//         qty: 3,
//         price: 8
//       },
//       {
//         item: "steak",
//         qty: 3,
//         price: 28
//       },
//       {
//         item: "ice cream",
//         qty: 3,
//         price: 5
//       }
//     ]
//   },
//   {
//     tableID: 1,
//     orders: [
//       {
//         item: "coffee",
//         qty: 2,
//         price: 3.5
//       },
//       {
//         item: "salad",
//         qty: 2,
//         price: 8
//       },
//       {
//         item: "steak",
//         qty: 2,
//         price: 28
//       },
//       {
//         item: "ice cream",
//         qty: 2,
//         price: 5
//       }
//     ]
//   }
// ];

// const getSubtotal = (table) => {
//   let subtotal = 0;
//   table.orders.forEach((order) => {
//     subtotal += order.price * order.qty;
//   });
//   return subtotal;
// };

// const calcPercentage = (sub, perc) => +((sub / 100) * perc).toFixed(2);

// const createBill = (table) => {
//   const subtotal = getSubtotal(table);
//   const tax = calcPercentage(subtotal, 7.7);
//   const tip = calcPercentage(subtotal, 10);
//   const bill = {
//     subtotal,
//     tax,
//     tip,
//     total: `CHF ${(subtotal + tax + tip).toFixed(2)}`
//   };
//   return bill;
// }

// register.forEach((table) => {
//   console.log(createBill(table));
// });