import React from "react";
import {
	Component,
	ContactWrapper,
	Container,
	Menu,
	MenuLink,
} from "./subFooter.styled";
import { SubFooterProps } from "./subFooter.types";
import { LinkData } from "../../../interfaces";
import { Color } from "../../../enums-gb";
import { Icon } from "../../single";

export const SubFooter: React.FC<SubFooterProps> = (
	props: SubFooterProps
): JSX.Element => {
	const { className, eventTheme, links }: SubFooterProps = props;

	return (
		<Component className={className} $eventTheme={eventTheme}>
			<Container>
				<Menu>
					{links &&
						links.map(
							(link: LinkData, index: number): JSX.Element => (
								<MenuLink
									key={index}
									to={"/bieg" + eventTheme + link.to}
									color='white'
									hover='grey95'
									margin='0 0 12px'
									marginSM='0 24px 0 0'
								>
									{link.text}
								</MenuLink>
							)
						)}
				</Menu>
				<ContactWrapper>
					<MenuLink
						to='mailto:sport@csir.gryfino.pl'
						align='center'
						color='white'
						hover='grey95'
						margin='0 0 12px'
						marginSM='0 24px 0 0'
					>
						<Icon size={24} icon={"mail"} color={Color.White} />
						sport@csir.gryfino.pl
					</MenuLink>
					<MenuLink
						to='tel:48601205951'
						align='center'
						color='white'
						hover='grey95'
						margin='0 0 12px'
						marginSM='0 24px 0 0'
					>
						<Icon size={24} icon={"phone"} color={Color.White} />
						{"601 205 951"}
					</MenuLink>
					<MenuLink
						to='https://facebook.com/profile.php?id=100064551137640'
						target='_blank'
						align='center'
						color='white'
						hover='grey95'
					>
						<Icon size={24} icon={"facebook"} color={Color.White} />
						facebook
					</MenuLink>
				</ContactWrapper>
			</Container>
		</Component>
	);
};
