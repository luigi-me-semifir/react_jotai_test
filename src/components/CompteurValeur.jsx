import { useAtom } from "jotai";
import { count } from "../atoms/countAtom";

const CompteurValeur = () => {
  const [compteur] = useAtom(count);
  return <h1>Le composant compteur valeur : {compteur}</h1>;
};

export default CompteurValeur;
