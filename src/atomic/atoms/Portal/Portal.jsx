import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
    const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null
    const el = useRef(typeof document !== `undefined` ? document.createElement("div") : null);

    useEffect(() => {
        portalRoot.appendChild(el.current);


        return () => {
            portalRoot.removeChild(el.current);
        };
    }, []);

    if (el.current) {
        return ReactDOM.createPortal(
            children, el.current
        );
    } else {
        return null
    }
}

export default Portal