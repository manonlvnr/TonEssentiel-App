
import { useToggleModeContext } from "../../../hooks/useToggleModeContext";
import "./ToggleMode.scss";

function ToggleMode() {
    const { darkMode, dispatch } = useToggleModeContext();

    const handleSwitch = () => {
        if (darkMode) {
            dispatch({ type: "LIGHTMODE" });
            document.documentElement.classList.remove("darkMode");
        } else {
            dispatch({ type: "DARKMODE" });
            document.documentElement.classList.add("darkMode");
        }

    };

    return (
        <div className="toggle-mode">
            <label htmlFor="toggle-mode">Thème sombre</label>
            <input type="checkbox" id="toggle-mode" checked={darkMode ? true : false} onChange={handleSwitch} />
        </div>
    );
}

export default ToggleMode;
