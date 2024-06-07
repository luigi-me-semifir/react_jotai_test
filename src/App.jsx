import { useTranslation } from "react-i18next";
import "./App.css";
import Valeur from "./components/Valeur";
import Increment from "./components/Increment";
import Form from "./components/Form";
import TestAction from "./components/TestAction";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mes premier test</h1>
        <h2>{t("welcome")}</h2>
        <div>
          <label>{t("selectLanguage")}</label>
          <select
            onChange={(evt) => changeLanguage(evt.target.value)}
            defaultValue={i18n.language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <Valeur />
        <Increment />
        <Form />
        <TestAction />
      </header>
    </div>
  );
}

export default App;
