import React from "react";


type Props = React.ComponentPropsWithRef<"h1">

export const H1 = (props: Props) => {

	const style = {
		fontSize: '1.5em'
	}
	return (
		<h1 {...props} style={style}/>
	)
}