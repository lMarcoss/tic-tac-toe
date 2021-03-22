export interface BoardProps {
	squares: string[];
	onClick: (index: number) => void;
	status: string;
}