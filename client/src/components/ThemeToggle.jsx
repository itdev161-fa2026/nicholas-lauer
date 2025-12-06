import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Header.css"; // slider CSS is inside Header.css

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="slider-thumb"></span>
      </span>
    </label>
  );
};

export default ThemeToggle;

