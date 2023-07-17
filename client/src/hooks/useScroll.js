import { useState } from "react";
import { useEffect } from "react";

const useScroll = (element) => {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = (e) => {
            setScroll(e.target.scrollTop)
        }
        let elem = element.current;

        elem.addEventListener("scroll", handleScroll);
        return () => {
            elem.removeEventListener("scroll", handleScroll)
        }
    }, [element])

    return scroll;
};

export default useScroll;