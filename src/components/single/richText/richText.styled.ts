import styled from "styled-components";

import { StyledComponent } from "../../../interfaces";
import { Color, FontWeight } from "../../../enums";

export const Component: StyledComponent<"div"> = styled.div`
	& > div:not(:last-child) {
		margin-bottom: 22px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${Color.Secondary};
		font-weight: ${FontWeight.Bold};
	}

	h1 {
		font-size: 30px;
		line-height: 38px;
		letter-spacing: -1px;
	}

	h2 {
		font-size: 28px;
		line-height: 32px;
		letter-spacing: -0.5px;
	}

	h3,
	h4,
	h5,
	h6 {
		font-size: 22px;
		line-height: 26px;
	}

	p {
		color: ${Color.Secondary};
		font-size: 18px;
		line-height: 24px;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 8px;
		list-style: none;

		li {
			color: ${Color.Secondary};
			font-size: 18px;
			line-height: 24px;
			text-align: left;
			white-space: pre-wrap;

			br {
				display: none;
			}
		}
	}

	a {
		color: ${Color.Secondary};
		font-size: 18px;
		line-height: 29px;
		transition: color 0.2s ease 0s;

		&:hover {
			color: ${Color.Primary};
		}
	}
`;
