import speakGoodBye from "./SpeakGoodBye.js";
import speakHello from "./SpeakHello.js";
import speakMoney from "./SpeakMoney.js";

const names = [
  "Bill",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Steven",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

console.warn(
  `Умови : \n Goodbye якщо ім'я починається на літеру "J" \n Money bonus якщо ім'я довше ніж 3 букви та перевернуте задом наперед ім'я починається з літери "L" \n Hello для всіх інших імен`
);

for (const name of names) {
  if (name.toLowerCase()[0] === "j") {
    speakGoodBye(name);
  } else if (
    name.length > 3 &&
    name.toLowerCase().split("").reverse().join("")[0] === "l"
  ) {
    speakMoney(name);
  } else {
    speakHello(name);
  }
}
