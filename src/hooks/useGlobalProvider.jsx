import { useState } from "react";

function useGlobalProvider() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}
export default useGlobalProvider;
