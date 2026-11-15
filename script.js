const themeButtons = document.querySelectorAll("[data-theme-toggle]");

function updateThemeButtons() {
  const dark =
    document.documentElement.getAttribute("data-bs-theme") === "dark";
  for (const button of themeButtons) {
    button.querySelector(".theme-symbol").textContent = dark ? "☀" : "☾";
    button.setAttribute(
      "aria-label",
      dark ? "Включить светлую тему" : "Включить тёмную тему",
    );
    button.title = button.getAttribute("aria-label");
  }
}

for (const button of themeButtons) {
  button.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-bs-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (_) {}
    updateThemeButtons();
  });
}
updateThemeButtons();
document.getElementById("year").textContent = new Date().getFullYear();
