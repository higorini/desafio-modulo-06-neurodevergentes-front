import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

function useGlobal() {
  return useContext(GlobalContext);
}

export default useGlobal;
