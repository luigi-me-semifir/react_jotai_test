import { useAtom } from "jotai";
import { count } from "../atoms/countAtom";

const Decrement = () => {
  const [Decrement, setDecrement] = useAtom(count);

  const handleClickMoin = () => {
    setDecrement(Decrement - 1);
  };
  return <button onClick={handleClickMoin}> Retire 1 </button>;
};

export default Decrement;
