// ThemeService.js - Fix for MOB-62
class ThemeService {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light";
  }
  toggle() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
  }
  getTheme() { return this.theme; }
}
module.exports = { ThemeService };
