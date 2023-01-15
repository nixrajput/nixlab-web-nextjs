import { useEffect } from "react";

function useOnClickOutside(ref, dropdown, handler) {
    useEffect(() => {
        const listener = (event) => {
            if (dropdown && ref.current &&
                !ref.current.contains(event.target)) {
                handler(event);
            }
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    },
        [ref, handler, dropdown]
    );
}

export default useOnClickOutside;