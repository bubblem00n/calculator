const numbers = document.querySelectorAll(".number");
const output = document.querySelector(".output");

const settingEl = document.querySelector(".parentBlock");

const blockEl = document.querySelector(".block");

const items = document.querySelectorAll(".item");
const containerEl = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const colorChange = document.querySelectorAll(".color-change");
const equalEl = document.querySelector(".equal");

const reverseBtn = document.querySelector(".reverse");

const inputColorEl = document.querySelector(".input-color");

// Scintific or Standart
if (reverseBtn.innerText === "Scientific") {
  reverseBtn.innerText = "Standart";
  btns.forEach((el) => {
    el.style = `transform: translate(-80px, -100px)`;
    if (el.getAttribute("scientificEl", "true")) {
      el.style.opacity = 0;
    }
  });
  output.style = `transform: translate(-80px, -10px)`;
  equalEl.style = `transform: translate(-80px, -100px)`;
  containerEl.style = `width: 350px; height: 550px;`;
}

// Standart or Scientific btn
reverseBtn.addEventListener("click", () => {
  if (reverseBtn.innerText === "Scientific") {
    reverseBtn.innerText = "Standart";
    btns.forEach((el) => {
      el.style = `transform: translate(-80px, -100px)`;
      if (el.getAttribute("scientificEl", "true")) {
        el.style.opacity = 0;
      }
    });
    output.style = `transform: translate(-80px, -10px)`;
    equalEl.style = `transform: translate(-80px, -100px);`;
    containerEl.style = `width: 350px; height: 550px`;
  } else {
    reverseBtn.innerText = "Scientific";
    btns.forEach((el) => {
      el.style = `transform: translate(0px, 0px)`;
      if (el.getAttribute("scientificEl", "true")) {
        el.style.opacity = 1;
      }
    });
    output.style = `transform: translate(0px, 0px)`;
    equalEl.style = `transform: translate(0px, 0px)`;
    containerEl.style = `width: 460px; height: 650px`;
  }
});

// Setting element (coloring)
items.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("dark")) {
      containerEl.style.backgroundColor = "black";
      containerEl.style.color = "white";
      containerEl.classList.remove("animationRainbow");
      btns.forEach((el) => {
        el.style.backgroundColor = "rgb(23, 23, 23)";
      });
    } else if (el.classList.contains("light")) {
      containerEl.style.backgroundColor = "lightgray";
      containerEl.style.color = "black";
      containerEl.classList.remove("animationRainbow");
      btns.forEach((el) => {
        el.style.backgroundColor = "DarkGrey";
      });
    } else if (el.classList.contains("rainbow")) {
      containerEl.classList.add("animationRainbow");
      containerEl.style.color = "#fff";
      btns.forEach((el) => {
        el.style.backgroundColor = `transparent`;
      });
    }
  });
});
inputColorEl.addEventListener("input", (e) => {
  colorChange.forEach((el) => {
    el.style.color = e.target.value;
  });
  equalEl.style.background = e.target.value;
  output.style.color = e.target.value;
});
settingEl.addEventListener("click", () => {
  blockEl.classList.toggle("active");
});

// Вывод на стрaницу
numbers.forEach((el) => {
  el.addEventListener("click", () => {
    output.innerText += el.innerText;
  });
});
// Очистка поля
document.querySelector(".clean").addEventListener("click", () => {
  output.innerText = "";
  power = "";
});
// Стирание посленего значения
document.querySelector(".back").addEventListener("click", () => {
  const exp = output.innerText;
  output.innerText = exp.substr(0, exp.length - 1);
});

// Вычисления
equalEl.addEventListener("click", () => {
  const exp = output.innerText;
  // Для возведения в любую степень
  if (output.innerText.includes("^")) {
    let arrTemp = output.innerText.split("^");
    let num = eval(arrTemp[0]);
    let pow = +arrTemp[1];

    output.innerText = Math.pow(num, pow);
    power = "";
    return;
  }
  // Общее решение
  if (exp) {
    output.innerText = eval(exp);
  }
});

//Вычисление процентов
document.querySelector(".percent").addEventListener("click", () => {
  output.innerText = eval(output.innerText) / 100;
});

// Число PI
document.querySelector(".pi").addEventListener("click", (e) => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  } else {
    output.innerText += Math.PI.toFixed(5);
  }
});
// Число E
document.querySelector(".e").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText += Math.E.toFixed(5);
});

// SQRT корень числа
document.querySelector(".sqrt").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = Math.sqrt(eval(output.innerText));
});
// Возведение в квадрат
document.querySelector(".sqr").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = Math.pow(eval(output.innerText), 2);
});
// Возведение в -1
document.querySelector(".pow-1").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = Math.pow(eval(output.innerText), -1);
});
// Возведение в любую степень
document.querySelector(".powY").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText += "^";
});

// Факториал
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
document.querySelector(".fact").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = factorial(+eval(output.innerText));
});

// Logarifm
document.querySelector(".log").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = Math.log10(eval(output.innerText)).toFixed(8);
});
document.querySelector(".ln").addEventListener("click", () => {
  if (reverseBtn.innerText === "Standart") {
    e.target.disabled = true;
  }
  output.innerText = Math.log(eval(output.innerText)).toFixed(8);
});

// degOrRad
const optionedBtn = document.querySelector(".option");
optionedBtn.addEventListener("click", (e) => {
  if (e.target.innerText == "deg") {
    e.target.innerText = "rad";
    output.innerText = "";
  } else if (e.target.innerText === "rad") {
    e.target.innerText = "deg";
    output.innerText = "";
  }
});
// Sin || Cos || Tan || Cot
document.querySelectorAll(".angle").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (reverseBtn.innerText === "Standart") {
      e.target.disabled = true;
    } else {
      if (el.innerText === "sin") {
        if (optionedBtn.innerText === "rad") {
          // В радианах
          output.innerText = parseFloat(
            Math.sin(eval(output.innerText)).toFixed(8).toString()
          );
        }

        // В градусах
        else {
          output.innerText = parseFloat(
            Math.sin((eval(output.innerText) / 180) * Math.PI)
              .toFixed(8)
              .toString()
          );
        }
      }

      if (el.innerText === "cos") {
        if (optionedBtn.innerText === "rad") {
          // В радианах
          output.innerText = parseFloat(
            Math.cos(eval(output.innerText)).toFixed(8).toString()
          );
        }

        // В градусах
        else {
          output.innerText = parseFloat(
            Math.cos((eval(output.innerText) / 180) * Math.PI)
              .toFixed(8)
              .toString()
          );
        }
      }

      if (el.innerText === "tan") {
        if (optionedBtn.innerText === "rad") {
          // В радианах
          output.innerText = parseFloat(
            Math.tan(eval(output.innerText)).toFixed(8).toString()
          );
        }

        // В градусах
        else {
          output.innerText = parseFloat(
            Math.tan((eval(output.innerText) / 180) * Math.PI)
              .toFixed(8)
              .toString()
          );
        }
      }

      if (el.innerText === "cot") {
        if (optionedBtn.innerText === "rad") {
          // В радианах
          output.innerText = parseFloat(
            1 / Math.tan(eval(output.innerText)).toFixed(8).toString()
          );
        }

        // В градусах
        else {
          output.innerText = parseFloat(
            1 /
              Math.tan((eval(output.innerText) / 180) * Math.PI)
                .toFixed(8)
                .toString()
          );
        }
      }
    }
  });
});
