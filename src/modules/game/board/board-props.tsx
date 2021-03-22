export interface WinnerProps {
	line:number[];
	winner:string;
}

export interface BoardProps {
	squares: string[];
	onClick: (index: number) => void;
	status: string;
	winner: WinnerProps;
}
