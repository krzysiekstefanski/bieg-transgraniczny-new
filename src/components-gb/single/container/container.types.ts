export interface ContainerProps {
	className?: string;
	children?: React.ReactNode;
	column?: boolean;
	gap?: number;
}

export interface ComponentProps {
	$column: boolean;
	$gap: number;
}
