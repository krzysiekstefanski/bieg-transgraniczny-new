import React, { useEffect, useRef, ReactPortal } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./portal.types";

export const Portal: React.FC<PortalProps> = (
	props: PortalProps
): ReactPortal | null => {
	const { children }: PortalProps = props;
	const portalRoot =
		typeof document !== `undefined` ? document.getElementById("portal") : null;
	const el = useRef(
		typeof document !== `undefined` ? document.createElement("div") : null
	);

	useEffect(() => {
		const portalElement = el.current;

		if (portalRoot !== null && portalElement != null) {
			portalRoot.appendChild(portalElement);
		}

		return () => {
			if (portalRoot && portalElement) {
				portalRoot.removeChild(portalElement);
			}
		};
	}, []);

	if (el.current) {
		return createPortal(children, el.current);
	}

	return null;
};
