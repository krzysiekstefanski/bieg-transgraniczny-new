import { EventTheme } from "../../../enums-gb";

export interface LayoutProps {
	data: any;
	children: React.ReactNode;
	eventTheme?: EventTheme;
	isMainPage?: boolean;
	className?: string;
}
