import {useEffect} from "react";
import i18n, {loadNamespace} from "./i18n/index.js";
import App from "./App.jsx";

function I18nLayout() {

    useEffect(() => {
        loadNamespace("common", i18n.language);
        const sub = i18n.on("languageChanged", (lng) => loadNamespace("common", lng));
        return () => i18n.off("languageChanged", sub);
    }, []);
    return <App/>;
}

export default I18nLayout;