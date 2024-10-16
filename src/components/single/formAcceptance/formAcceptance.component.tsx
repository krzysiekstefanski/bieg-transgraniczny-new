import React from "react";
import {
	AltText,
	Checkbox,
	Checkmark,
	Component,
	Label,
} from "./formAcceptance.styled";
import { Text } from "../text/text.component";
import { Icon } from "../icon/icon.component";

export const FormAcceptance: React.FC = (): JSX.Element => {
	return (
		<Component>
			<Label>
				<Checkbox className={"checkbox"} type={"checkbox"} />
				<Checkmark className={"checkmark"}>
					<Icon icon={"check-1"} size={16} />
				</Checkmark>
				<Text
					text={`Zgadzam się na kontakt w celu uzyskania odpowiedzi na wiadomość
                zawartą w formularzu kontaktowym.`}
				/>
			</Label>
			<AltText
				text={`Państwa dane przetwarzane będą wyłącznie w celu udzielenia
              odpowiedzi na zapytanie zgodnie z zasadą, która głosi, że
              przetwarzanie danych jest zgodne z prawem jeżeli jest niezbędne w
              celu realizacji umowy lub przed jej zawarciem.`}
			/>
		</Component>
	);
};
