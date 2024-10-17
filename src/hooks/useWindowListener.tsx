import { useEffect } from "react";

const useWindowListener = (eventType: string, listener: EventListener) => {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    // Clean up function
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
};

export default useWindowListener;
