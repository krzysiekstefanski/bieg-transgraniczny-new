import React from "react";
import { GlobalStyle } from "./src/components/single/globalStyle/globalStyle.const";

export const wrapPageElement = ({ element }) => {
	<>
		<GlobalStyle />
		{element}
	</>;
};
