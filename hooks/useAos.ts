import { useEffect } from "react";
import Aos, { AosOptions } from "aos";

function useAos(options?: AosOptions) {
  useEffect(() => {
    Aos.init(options);
  }, []);
}

export default useAos;
