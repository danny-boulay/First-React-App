import { useContext } from "react";
import {ThemeContext} from '../App';

function ThemeToggle() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="theme-toggle">
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    )
}

export default ThemeToggle;