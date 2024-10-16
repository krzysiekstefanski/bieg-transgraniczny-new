import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color } from "../../../enums";

export const Component: StyledComponent<"div"> = styled.div`
	width: 100%;

	.from-label {
		p {
			line-height: 18px;
		}
	}

	label {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;

		&[for="email"] {
			margin-bottom: 24px;
		}

		&[for="topic"] {
			margin-bottom: 32px;
		}

		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		textarea:-webkit-autofill,
		textarea:-webkit-autofill:hover,
		textarea:-webkit-autofill:focus {
			-webkit-box-shadow: 0 0 0px 1000px ${Color.White} inset;
		}
	}
`;

export const Flexbox: StyledComponent<"div"> = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FormInput: StyledComponent<"input"> = styled.input`
	height: 40px;
	width: 100%;
	font-size: 18px;
	line-height: 24px;
	background-color: transparent;
	border: 1px solid ${Color.Secondary};
	border-radius: 3px;
	padding: 15px;
	color: ${Color.Secondary};
	margin-top: 8px;

	&:hover,
	&:focus {
		border: 1px solid ${Color.Primary};
		outline: none;
	}

	@media (min-width: 768px) {
		max-width: 570px;
	}
`;

export const FormTextarea: StyledComponent<"textarea"> = styled.textarea`
	height: 160px;
	width: 100%;
	font-size: 18px;
	line-height: 24px;
	background-color: transparent;
	border: 1px solid ${Color.Secondary};
	border-radius: 3px;
	padding: 15px;
	resize: none;
	color: ${Color.Secondary};
	font-family: inherit;

	&:hover,
	&:focus {
		border: 1px solid ${Color.Primary};
		outline: none;
	}

	&::placeholder {
		color: ${Color.Secondary};
	}
`;

export const FormButton = styled.button`
	font-family: inherit;
	color: ${Color.White};
	font-size: 18px;
	line-height: 24px;
	font-weight: 500;
	text-decoration: none;
	background-color: ${Color.Primary};
	border: 0;
	border-radius: 3px;
	padding: 8px 16px;
	cursor: pointer;
	transition: color 0.1s ease, background-color 0.3s ease;

	@media (min-width: 768px) {
		margin-right: auto;
	}

	&:hover {
		background-color: ${Color.Primary};

		svg {
			path {
				fill: #000;
			}
		}
	}
`;
