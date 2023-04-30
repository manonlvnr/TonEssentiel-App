
import { useToggleModeContext } from "../../../hooks/useToggleModeContext";


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
            <label htmlFor="toggle-mode">
                <input type="checkbox" id="toggle-mode" checked={darkMode ? true : false} onChange={handleSwitch} />
            </label>
        </div>
    );
}

export default ToggleMode;
