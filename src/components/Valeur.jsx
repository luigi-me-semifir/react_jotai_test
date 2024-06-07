import { useAtom } from "jotai";
import { count } from "../atoms/countAtom";
import { useTranslation } from "react-i18next";

const Valeur = () => {
  const { t } = useTranslation();
  const [compteur] = useAtom(count);
  return (
    <h2>
      {t("value")} : {compteur}
    </h2>
  );
};

export default Valeur;
