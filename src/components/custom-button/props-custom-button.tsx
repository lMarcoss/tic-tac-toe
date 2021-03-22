import {MouseEventHandler} from "react";

export interface PropsCustomButton {
	label: string;
	onClick: MouseEventHandler;
	class: string
}