// ACCOUNT DATA
const account1 = {
  owner: "Anna Anderson",
  username: "aa",
  movements: [200, 450, -400.5, 3000, -650, -130, 70, 1300],
  pin: 1234,
};

const account2 = {
  owner: "Bijan Bell",
  username: "bb",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 1111,
};

const account3 = {
  owner: "Celeste Carter",
  username: "cc",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 0000,
};

const accounts = [account1, account2, account3];

// ELEMENTS
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");

let currentAccount;

const matchUser = (username, pin) => {
  const matchedAccount = accounts.find((acc) => username === acc.username);
  if (matchedAccount && matchedAccount.pin === pin) {
    return matchedAccount;
  } else {
    throw new Error("Couldn't match user");
  }
};

const message = (text, error) => {
  labelWelcome.textContent = text;
  error
    ? (labelWelcome.style.color = "var(--withdrawal)")
    : (labelWelcome.style.color = "var(--deposit)");
};

const displayAccount = (acc) => {
  if (acc) {
    containerApp.style.opacity = "100";
    containerMovements.innerHTML = "";
  } else {
    throw new Error("No account to display");
  }
};

btnLogin.addEventListener("click", function (e) {
  try {
    e.preventDefault();
    currentAccount = matchUser(inputLoginUsername.value, +inputLoginPin.value);
    displayAccount(currentAccount);
    message(`Welcome ${currentAccount.owner}`);
    displayBalance();
    displaySums();
    displaysExpense();
    currentAccount.movements.forEach(mov, (i) => {
      containerMovements.insertAdjacentElement(
        "afterbegin",
        createMovementElement(mov, i)
      );
    });
  } catch (err) {
    message(err.message, true);
  }
});

const displayBalance = () => {
  labelBalance.textContent = currentAccount.movements.reduce(
    (acc, amount) => acc + amount,
    0
  );
};

const displaySums = () => {
  labelSumIn.textContent = currentAccount.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
};

const displaysExpense = () => {
  labelSumOut.textContent = currentAccount.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
};

const createMovementElement = (mov, i) => {
  const html =
    `
  <div class="movements__row">
  <div class="movements__type movements__type--${
    mov > 0 ? "deposit" : "withdrawal"
  }">
  ${i + mov > 0 ? "Deposit" : "Withdrawal"}</div>` +
    `<div class="movements__value"></div>`;
  containerMovements.insertAdjacentHTML("afterbegin", html);

  return html;
};

const transfer = (from, to, amount) => {
  const destination = accounts.find((acc) => acc.username === to);
  const cleanAmount = +amount;
  if (destination && currentAccount.balance >= cleanAmount && cleanAmount < 0) {
    destination.movements.push(cleanAmount);
    currentAccount.movements.push(-cleanAmount);
  } else {
    throw new Error("Couldn't tranfer, something is going wrong");
  }
};

btnTransfer.addEventListener("click", (e)=>
e.preventDefault
try {
const transferData =   transfer(currentAccount, inputTransferTo.value, inputTransferAmount.value)
message (`Transfered CHF ${transferData.cleanAmount} to ${transferData.}`)

catch (error) {
  
})
