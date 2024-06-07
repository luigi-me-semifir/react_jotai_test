import { useAtom } from "jotai";
import { count } from "../atoms/countAtom";

const Increment = () => {
  const [increment, setIncrement] = useAtom(count);

  const handleClickPlus = () => {
    setIncrement(increment + 1);
  };
  return <button onClick={handleClickPlus}> Ajout 1 </button>;
};

export default Increment;
