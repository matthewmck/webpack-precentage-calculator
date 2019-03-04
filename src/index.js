import "./styles/style.css";

const calcBTN = document.getElementById("calulate-btn");
calcBTN.onclick = () => {
  System.import("./calcPercentage").then(module => {
    module.default();
  });
};
