import { percentage } from "./math";

export default () => {
  const percent = document.getElementById("percentage").value;
  const percentOf = document.getElementById("percentage-of").value;
  const result = document.getElementById("result");
  let amount;
  let displayMSG;

  amount = percentage(percent.replace(/\%$/, ""), percentOf);
  displayMSG = document.createTextNode(
    `${percent}% of ${percentOf} is ${amount}`
  );

  result.appendChild(displayMSG);
};
