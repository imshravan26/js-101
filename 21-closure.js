// function init() {
//   let name = "Shravan";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }


// init();
// console.log(name); this dosen't have the "name"

// closure hota hai tiffin box jo har ek function carry karta hai
function makeFunc() {
  const name = "Shravan";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc(); // isme name aaya kaise ?
myFunc();

function startCompany() {
  function ca(name) {
    return `Name of your company ${name}`;
  }

  return ca;
}

const getMeACompany = startCompany();
console.log(getMeACompany("apple"));

function eternal(guest) {
  const guestName = guest;
  let count = 0;

  function zomato() {
    console.log(`Hi ${guestName}, from zomato`);
  }

  function blinkit() {
    if (count == 1) return;
    console.log(`Hi ${guestName}, from blinkit`);
    count++;
  }
  return {
    zomato,
    blinkit,
  };
}

const hitesh = eternal("hitesh");
const piyush = eternal("piyush");
hitesh.blinkit();
piyush.blinkit();
hitesh.zomato();

// useMemo()
