import styled from "styled-components";
import { StyledComponent } from "../../../interfaces";
import { ComponentProps } from "./icon.types";

export const Component: StyledComponent<
	"div",
	ComponentProps
> = styled.div<ComponentProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	height: ${({ height }: ComponentProps): string => height.toString() + "px"};
	width: ${({ width }: ComponentProps): string => width.toString() + "px"};
	position: ${({ inset }: ComponentProps): string =>
		inset ? "absolute" : "static"};
	inset: ${({ inset }: ComponentProps): string => (inset ? inset : "auto")};

	svg {
		display: block;
	}
`;

export const IconWrapper: StyledComponent<"div"> = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;
