// Dark Mode and Local Storage
const darkModeBtn = document.getElementById("darkModeBtn");
let darkModeSt = localStorage.getItem("darkModeSt");
let darkModeOn = false;
const enableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "dark");
  darkModeBtn.classList.add("toggleAnim");
  darkModeBtn.classList.remove("toggleAnimRev");
  localStorage.setItem("darkModeSt", "enabled");
};
const disableDarkMode = () => {
  document.body.setAttribute("data-darkMode", "light");
  darkModeBtn.classList.add("toggleAnimRev");
  darkModeBtn.classList.remove("toggleAnim");
  localStorage.setItem("darkModeSt", "disabled");
};
if (darkModeSt === "enabled") {
  enableDarkMode();
}
function darkMode() {
  document.addEventListener("DOMContentLoaded", () => {
    darkModeBtn.addEventListener("click", () => {
      darkModeSt = localStorage.getItem("darkModeSt");
      if (darkMode !== "enabled" && !darkModeOn) {
        enableDarkMode();
        trans();
        darkModeOn = true;
      } else {
        disableDarkMode();
        trans();
        darkModeOn = false;
      }
    });
  });
}
darkMode();

let trans = () => {
  document.body.classList.add("transition");
  window.setTimeout(() => {
    document.body.classList.remove("transition");
  }, 1000);
};

// Theme Mode and Local Storage
const defaultThemeBtn = document.getElementById("default");
const redThemeBtn = document.getElementById("red");
const blueThemeBtn = document.getElementById("blue");
const pinkThemeBtn = document.getElementById("pink");
const yellowThemeBtn = document.getElementById("yellow");
let defaultThemeSt = localStorage.getItem("defaultThemeSt");
let defaultThemeOn = false;
let redThemeSt = localStorage.getItem("redThemeSt");
let redThemeOn = false;
let blueThemeSt = localStorage.getItem("blueThemeSt");
let blueThemeOn = false;
let pinkThemeSt = localStorage.getItem("pinkThemeSt");
let pinkThemeOn = false;
let yellowThemeSt = localStorage.getItem("yellowThemeSt");
let yellowThemeOn = false;
const enableDefaultTheme = () => {
  document.body.setAttribute("data-theme", "default");
  localStorage.setItem("defaultThemeSt", "enabled");
  localStorage.setItem("redThemeSt", "disabled");
  localStorage.setItem("blueThemeSt", "disabled");
  localStorage.setItem("pinkThemeSt", "disabled");
  localStorage.setItem("yellowThemeSt", "disabled");
};
const disableDefaultTheme = () => {
  localStorage.setItem("defaultThemeSt", "disabled");
};
const enableRedTheme = () => {
  document.body.setAttribute("data-theme", "red");
  localStorage.setItem("defaultThemeSt", "disabled");
  localStorage.setItem("redThemeSt", "enabled");
  localStorage.setItem("blueThemeSt", "disabled");
  localStorage.setItem("pinkThemeSt", "disabled");
  localStorage.setItem("yellowThemeSt", "disabled");
};
const disableRedTheme = () => {
  localStorage.setItem("redThemeSt", "disabled");
};
const enableBlueTheme = () => {
  document.body.setAttribute("data-theme", "blue");
  localStorage.setItem("defaultThemeSt", "disabled");
  localStorage.setItem("redThemeSt", "disabled");
  localStorage.setItem("blueThemeSt", "enabled");
  localStorage.setItem("pinkThemeSt", "disabled");
  localStorage.setItem("yellowThemeSt", "disabled");
};
const disableBlueTheme = () => {
  localStorage.setItem("blueThemeSt", "disabled");
};
const enablePinkTheme = () => {
  document.body.setAttribute("data-theme", "pink");
  localStorage.setItem("defaultThemeSt", "disabled");
  localStorage.setItem("redThemeSt", "disabled");
  localStorage.setItem("blueThemeSt", "disabled");
  localStorage.setItem("pinkThemeSt", "enabled");
  localStorage.setItem("yellowThemeSt", "disabled");
};
const disablePinkTheme = () => {
  localStorage.setItem("pinkThemeSt", "disabled");
};
const enableYellowTheme = () => {
  document.body.setAttribute("data-theme", "yellow");
  localStorage.setItem("defaultThemeSt", "disabled");
  localStorage.setItem("redThemeSt", "disabled");
  localStorage.setItem("blueThemeSt", "disabled");
  localStorage.setItem("pinkThemeSt", "disabled");
  localStorage.setItem("yellowThemeSt", "enabled");
};
const disableYellowTheme = () => {
  localStorage.setItem("yellowThemeSt", "disabled");
};
if (
  (defaultThemeSt === "enabled" && !redThemeOn) ||
  (defaultThemeSt === "enabled" && !blueThemeOn) ||
  (defaultThemeSt === "enabled" && !pinkThemeOn) ||
  (defaultThemeSt === "enabled" && !yellowThemeOn)
) {
  enableDefaultTheme();
}
if(
  (redThemeSt === "enabled" && !defaultThemeOn) ||
  (redThemeSt === "enabled" && !blueThemeOn) ||
  (redThemeSt === "enabled" && !pinkThemeOn) ||
  (redThemeSt === "enabled" && !yellowThemeOn)
) {
  enableRedTheme();
}
if (
  (blueThemeSt === "enabled" && !defaultThemeOn) ||
  (blueThemeSt === "enabled" && !redThemeOn) ||
  (blueThemeSt === "enabled" && !pinkThemeOn) ||
  (blueThemeSt === "enabled" && !yellowThemeOn)
) {
  enableBlueTheme();
}
if (
  (pinkThemeSt === "enabled" && !defaultThemeOn) ||
  (pinkThemeSt === "enabled" && !redThemeOn) ||
  (pinkThemeSt === "enabled" && !blueThemeOn) ||
  (pinkThemeSt === "enabled" && !yellowThemeOn)
) {
  enablePinkTheme();
}
if (
  (yellowThemeSt === "enabled" && !defaultThemeOn) ||
  (yellowThemeSt === "enabled" && !redThemeOn) ||
  (yellowThemeSt === "enabled" && !blueThemeOn) ||
  (yellowThemeSt === "enabled" && !pinkThemeOn)
) {
  enableYellowTheme();
}
function defaultTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    defaultThemeBtn.addEventListener("click", () => {
      defaultThemeSt = localStorage.getItem("defaultThemeSt");
      if (defaultTheme !== "enabled" && !defaultThemeOn) {
        disableRedTheme();
        disableBlueTheme();
        disablePinkTheme();
        disableYellowTheme();
        enableDefaultTheme();
        trans();
        defaultThemeOn = true;
      } else {
        disableDefaultTheme();
        trans();
        defaultThemeOn = false;
      }
    });
  });
}
function redTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    redThemeBtn.addEventListener("click", () => {
      redThemeSt = localStorage.getItem("redThemeSt");
      if (redTheme !== "enabled" && !redThemeOn) {
        disableDefaultTheme();
        disableBlueTheme();
        disablePinkTheme();
        disableYellowTheme();
        enableRedTheme();
        trans();
        redThemeOn = true;
      } else {
        disableRedTheme();
        trans();
        redThemeOn = false;
      }
    });
  });
}
function blueTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    blueThemeBtn.addEventListener("click", () => {
      blueThemeSt = localStorage.getItem("blueThemeSt");
      if (blueTheme !== "enabled" && !blueThemeOn) {
        disableDefaultTheme();
        disableRedTheme();
        disablePinkTheme();
        disableYellowTheme();
        enableBlueTheme();
        trans();
        blueThemeOn = true;
      } else {
        disableBlueTheme();
        trans();
        blueThemeOn = false;
      }
    });
  });
}
function pinkTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    pinkThemeBtn.addEventListener("click", () => {
      pinkThemeSt = localStorage.getItem("pinkThemeSt");
      if (pinkTheme !== "enabled" && !pinkThemeOn) {
        disableDefaultTheme();
        disableRedTheme();
        disableBlueTheme();
        disableYellowTheme();
        enablePinkTheme();
        trans();
        pinkThemeOn = true;
      } else {
        disablePinkTheme();
        trans();
        pinkThemeOn = false;
      }
    });
  });
}
function yellowTheme() {
  document.addEventListener("DOMContentLoaded", () => {
    yellowThemeBtn.addEventListener("click", () => {
      yellowThemeSt = localStorage.getItem("yellowThemeSt");
      if (yellowTheme !== "enabled" && !yellowThemeOn) {
        disableDefaultTheme();
        disableRedTheme();
        disableBlueTheme();
        disablePinkTheme();
        enableYellowTheme();
        trans();
        yellowThemeOn = true;
      } else {
        disableYellowTheme();
        trans();
        yellowThemeOn = false;
      }
    });
  });
}
defaultTheme();
redTheme();
blueTheme();
pinkTheme();
yellowTheme();

const themeModeBtn = document.getElementById("colorModeBtn");
let themeModeOn = false;

themeModeBtn.addEventListener('click', () => {
  if(!themeModeOn){
  defaultThemeBtn.classList.add("dots");
  defaultThemeBtn.classList.remove("hideDots");
  redThemeBtn.classList.add("dots");
  redThemeBtn.classList.remove("hideDots");
  blueThemeBtn.classList.add("dots");
  blueThemeBtn.classList.remove("hideDots");
  pinkThemeBtn.classList.add("dots");
  pinkThemeBtn.classList.remove("hideDots");
  yellowThemeBtn.classList.add("dots");
  yellowThemeBtn.classList.remove("hideDots");
  themeModeOn = true;
} else {
  defaultThemeBtn.classList.add("hideDots");
  defaultThemeBtn.classList.remove("dots");
  redThemeBtn.classList.add("hideDots");
  redThemeBtn.classList.remove("dots");
  blueThemeBtn.classList.add("hideDots");
  blueThemeBtn.classList.remove("dots");
  pinkThemeBtn.classList.add("hideDots");
  pinkThemeBtn.classList.remove("dots");
  yellowThemeBtn.classList.add("hideDots");
  yellowThemeBtn.classList.remove("dots");
  themeModeOn = false;
  }
})
