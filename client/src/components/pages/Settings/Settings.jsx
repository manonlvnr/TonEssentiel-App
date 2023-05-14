import Title from "../../atoms/Title/Title";
import ToggleMode from "../../atoms/ToggleMode/ToggleMode";
import Header from "../../organisms/Header/Header";
import "./Settings.scss";

function Settings() {
    return (
        <>
        <Header />
        <Title children="Paramêtres" />
        <div className="settings__wrapper">
            <h2 className="settings__title">Thème :</h2>
            <ToggleMode />
        </div>
        </>
    );
}

export default Settings;
